import React from 'react'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import authStore from '../../store/authStore';
import { observer } from 'mobx-react-lite';
import { logout } from '../../service/authService';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../service/tokenService';
import { getUser } from '../../store/tokenService';
import { Link } from 'react-router-dom';
const ProfileMenu = observer(({anchorRef})=>{
    const navigate=useNavigate()
    const currentUser=getUser()

    const handleLogOut=()=>{
        logout(currentUser?.id).then(()=>{
            navigate('/')
            removeUser()
            authStore.setCurrentUser(undefined) 
            authStore.setOpenNavbar(false)
            window.location.reload()

            
        })}

  const handleToggle = () => {
      authStore.setOpenNavbar(!authStore.openNavbar)
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    authStore.setOpenNavbar(false)
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      authStore.setOpenNavbar(false)
    } else if (event.key === 'Escape') {
        authStore.setOpenNavbar(false)

    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(authStore.openNavbar);
  React.useEffect(() => {
    if (prevOpen.current === true && authStore.openNavbar === false) {
      anchorRef?.current?.focus();
    }

    prevOpen.current = authStore.openNavbar;
  }, [authStore.openNavbar]);
  return (
    <Stack direction="row" spacing={2} style={{zIndex:"20"}}>
      
      <div>
        
        <Popper
          open={authStore.openNavbar}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={authStore.openNavbar}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="profile" style={{textDecoration:"none"}}><MenuItem >Profile</MenuItem></Link>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  )
})

export default ProfileMenu