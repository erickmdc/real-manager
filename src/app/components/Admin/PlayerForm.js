import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment, TextField, Checkbox, Grid, Avatar, Typography,
  FormControlLabel, MenuItem, CircularProgress, Button
} from "@material-ui/core";
import styles from '../utils/styles';
import { withSnackbar } from 'notistack';

const emptyForm = () => {
  return {
    team: '',
    name: '',
    position: '',
    skill: '',
    price: 0.00,
    photo: '',
    isPresident: false,
  };
}

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    form: emptyForm(),
    isFormValid: false,
    photoUrl: '',
    photoName: 'Foto',
    disabled: false
  }

  handleAttachment = event => {
    const file = event.target.files[0];
    console.log(file);
    if (!file.type.includes('image'))
      this.props.enqueueSnackbar(`Eu preciso de uma foto, querido(a)...`, { variant: 'info' });
    else {
      const { form } = this.state;
      const newForm = { ...form, photo: file };
      this.setState({
        form: newForm, photoUrl: window.URL.createObjectURL(file),
        photoName: file.name
      });
    }
  }

  handleUploadButton = () => {
    this.inputRef.current.click();
  }

  handleFormChange = name => event => {
    const { form } = this.state;
    const newForm = { ...form, [name]: event.target.value };
    this.setState({ form: newForm });
  }

  handleCheckChange = name => event => {
    const { form } = this.state;
    const newForm = { ...form, [name]: event.target.checked };
    this.setState({ form: newForm });
  }

  checkValidForm = () => {
    const { form } = this.state;
    for (let key in form) {
      if (typeof form[key] !== 'boolean' && !form[key])
        return false;
    }
    return true;
  }

  handleSubmit = () => {
    const { form } = this.state;
    const { handleSubmitPlayer, teams } = this.props;
    const team = teams.find(t => t._id === form.team);
    this.setState({ disabled: true });

    const filePromise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(form.photo);
      reader.onload = () => {
        return resolve({
          fileName: form.photo.name, mimeType: form.photo.type, fileSize: form.photo.size,
          content: reader.result.substr(reader.result.indexOf(',') + 1)
        })
      };
      reader.onerror = error => reject(error);
    });

    filePromise.then(result => {
      const player = {
        name: form.name,
        skill: form.skill,
        price: form.price,
        position: form.position,
        teamId: team._id,
        teamName: team.name,
        isPresident: form.isPresident,
        photo: result
      };
      handleSubmitPlayer(player).then(() => {
        this.setState({ disabled: false, form: emptyForm(), photoUrl: '', photoName: 'Upload' });
      });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { form } = this.state;
    console.log(form);
    if (JSON.stringify(form) !== JSON.stringify(prevState.form)) {
      this.setState({ isFormValid: this.checkValidForm() })
    }
  }

  render() {
    const { form, isFormValid, photoName, photoUrl, disabled } = this.state;
    const { classes, teams } = this.props;

    return (
      <Grid container spacing={4}>
        <Grid item lg={6}>
          <TextField
            label="Nome"
            fullWidth
            required
            value={form.name}
            onChange={this.handleFormChange('name')}
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            select
            label="Time"
            onChange={() => 1}
            fullWidth
            required
            value={form.team}
            onChange={this.handleFormChange('team')}
          >
            {teams.map(team => (
              <MenuItem key={team._id} value={team._id}>
                {team.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Posição"
            fullWidth
            required
            value={form.position}
            onChange={this.handleFormChange('position')}
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Habilidade"
            fullWidth
            required
            value={form.skill}
            onChange={this.handleFormChange('skill')}
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Preço"
            type="number"
            required
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">c$</InputAdornment>,
            }}
            value={form.price}
            onChange={this.handleFormChange('price')}
          />
        </Grid>
        <Grid item lg={6}>
          <FormControlLabel
            control={
              <Checkbox checked={form.isPresident} onChange={this.handleCheckChange('isPresident')} />
            }
            label="Presidente do time"
          />
        </Grid>
        <Grid item lg={6}>
          <Button color="primary" onClick={this.handleUploadButton} fullWidth>
            {photoName}
          </Button>
          <input accept="image/*" ref={this.inputRef} type="file"
            onChange={this.handleAttachment} style={{ display: 'none' }}
          />
        </Grid>
        <Grid item lg={6}>
          <Button variant="contained" color="primary" style={{ maxWidth: '100%' }}
            onClick={this.handleSubmit} fullWidth disabled={disabled || !isFormValid}>
            {disabled ? <CircularProgress size={24} /> : "Salvar"}
          </Button>
        </Grid>
        <Grid item lg={6}>
          {photoUrl && <Avatar src={photoUrl} style={{ width: '100%', height: '100%' }} />}
        </Grid>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles)(PlayerForm);
export default withSnackbar(styledComponent);