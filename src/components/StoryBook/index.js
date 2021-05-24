import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

function StoryBook() {
  return (
    <Box display="flex" mt={2}>

    <Box ml={2.5}>
      <Typography variant="body1" gutterBottom>
      Buttons
      </Typography>
      <Box mb={4}>
        <Button variant="contained" size="large">Sign Up</Button>
        <Button variant="contained" size="medium">Sign Up</Button>
        <Button variant="contained" size="small">Sign Up</Button>
      </Box>
      <Box mb={4}>
        <Button variant="contained" color="primary" size="large">
          Sign Up
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Sign Up
        </Button>
        <Button variant="contained" color="primary" size="small">
          Sign Up
        </Button>
      </Box>
      <Box mb={4}>
        <Button variant="contained" color="secondary" size="large">
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Sign Up
        </Button>
      </Box>
      <Typography variant="body1" gutterBottom>
        Text Fields
      </Typography>

      <form noValidate autoComplete="off">
        <Box display="flex" flexDirection="column" alignItems="start">
          <TextField
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            label="Full Name"
            type="text"
            name="name"
          />
          <TextField
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
              focused: true
            }}
            InputProps={{
              autoFocus: true
            }}
            variant="filled"
            label="Email Adress"
            type="email"
            name="email"
          />
          <TextField
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            label="Password (8 characters)"
            type="password"
            name="password"
            helperText="Please input your password! The password must be at least 8 characters!"
            error={true}
          />
        </Box>
      </form>
    </Box>
    <Box>
      <Typography variant="body1" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h2" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h3" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h4" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h5" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h6" gutterBottom>
        Typography
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Typography
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Typography
      </Typography>
    </Box>
    
    </Box>
  )
}

export default StoryBook