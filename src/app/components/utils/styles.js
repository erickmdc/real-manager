const styles = theme => ({
  defaultPaper: {
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
        height: `calc(100vh - 56px)`,
    },
    [theme.breakpoints.up('md')]: {
      height: `calc(100vh - 48px)`,
    },
    [theme.breakpoints.up('lg')]: {
      height: `calc(100vh - 64px)`,
    },
  },
  //index Player
  formControl: {
    minWidth: 215,
    maxWidth: 300,
    width: '100%'
  },
  Avatar: {
    margin: 10,
    left: 0
  },
  //Player
  ListItemText: {
    right: 10,
    textAlign: 'right'
  },
  AvatarListItem: {
    margin: 'auto',
    width: '50%'
  },
  AvatarElement: {
    margin: 'auto',
    width: '50%',
    height: '50%'
  },
  //index MyTeam
  card: {
    width: '100%',
    //margin: '5px 0px',
    minWidth: 275,
    justifyContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  CardContent: {
    justifyContent: 'center'
  },
  //Squad
  cardUnknown: {
    backgroundColor: '#FAFAFA'
  },
  cardContent: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    '&:last-child': {
        paddingBottom: 8
    }
  },
  teamAvatar: {
    width: 'auto',
    height: 'auto',
    maxWidth: `100%`,
  },
  playerAvatar: {
    width: 'auto',
    height: 'auto',
    maxWidth: `90%`,
    // [theme.breakpoints.down('sm')]: {
    //   maxWidth: `90%`,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   maxWidth: `90%`,
    // },
  },
  actionButton: {
    width: '80%',
    float: 'right',
    fontWight: 'bold'
  },
  //index Market
  paper: {
    marginBottom: '5%',
    padding: '2%',
    marginLeft: '-12px',
    marginRight: '-12px',
    backgroundColor: '#FAFAFA'
  },
  progress: {
    marginTop: '10%',
    marginLeft: '50%'
  },
  marketBar: {
    top: 'auto',
    bottom: 0
  },
  fab: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  //PlayerCard
  playerCard: {
  minWidth: 275,
  marginBottom: 12,
  paddingBottom: 1,
  marginLeft: '-12px',
  marginRight: '-12px'
  },
  playerCardContent: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 8,
    '&:last-child': {
        paddingBottom: 16
    }
  },
  //index Championship
  tablePaper: {
    overflowX: 'auto',
    width: '100%',
    maxWidth: ((window.innerWidth > 0) ? window.innerWidth : screen.width)-16
  }
});

export default styles;