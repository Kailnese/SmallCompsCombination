import React from 'react'
import { Outlet, NavLink, matchPath } from 'react-router-dom'
import withRouter from '../common/withRouter'
import { 
    Box,
    List,
    ListItem,
    Button,
    Hidden
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Logo from '../../logo/logo'

const MainLayout = (props: any) => {
    const classes = style();
    const navBtns = [
        {
            id: 1, 
            path: `/app/birthdaycard`,
            title: "Birthday Card",
            icon: ""
        },
        {
            id: 2, 
            path: `/app/shopping`,
            title: "Shopping",
            icon: ""
        },
        {
            id: 3, 
            path: `/app/dragdrop`,
            title: "Drag and Drop",
            icon: ""
        },
        {
            id: 4,
            path: `/app/draw`,
            title: "Draw with Line",
            icon: ""
        }
    ]
    return (
        <Box 
            sx={{
                width: `100vw`,
                height: `100vh`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`
            }}
        >
            <Box
                sx={{
                    background: `black`,
                    width: `100vw`,
                    height: `10vh`,
                    display: `flex`,
                }}
            >
                {/* <img src={logo} /> */}
                <Box
                    sx={{
                        transform: `scale(0.5) translate(-50%, -50%)`,
                        background: `black`,
                        height: `440px`,
                        width: `455px`,
                        borderRadius: `0 260px 300px 0px`
                    }}
                >
                    <Logo/>
                </Box>
            </Box>
            <Box
                sx={{
                    background: `pink`,
                    display: `flex`,
                    justifyContent: `flex-end`,
                    alignItems: `flex-end`
                }}
            >
                <Hidden lgDown>
                    <Box
                        sx={{
                            background: `#000`,
                            width: `7vw`,
                            height: `77vh`,
                            bottom: `0`
                        }}
                    >
                        
                        <List>
                            {navBtns.map(nav => {
                                const active = nav.path ? !!matchPath({
                                    path: nav.path,
                                    end: false
                                }, props.location.pathname) : false;
                                return (
                                    <ListItem
                                        disableGutters
                                        sx={{
                                            display: 'flex',
                                            py: 0
                                        }}
                                        key={nav.id}
                                    >
                                        <Button
                                            component={NavLink}
                                            sx={{
                                                color: '#fff',
                                                fontWeight: 'medium',
                                                justifyContent: `flex-start`,
                                                letterSpacing: 0,
                                                py: 1.25,
                                                textTransform: 'none',
                                                width: '100%',
                                                ...(active && {
                                                    color: '#000',
                                                    backgroundColor: `#fff`,
                                                    borderRadius: `0 50px 50px 0`
                                                }),
                                                '& svg': {
                                                    mr: 1
                                                }
                                            }}
                                            to={nav.path}
                                        >
                                            {nav.icon}
                                            {nav.title === "" ? <></> : <span>{nav.title}</span>}
                                        </Button>

                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Hidden>
                <Box
                    sx={{
                        background: `#adb0ba`,
                        width: `93vw`,
                        height: `85vh`,
                        padding: `5vh 0 0 6vw`,
                        overflow: `auto`
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

const style = makeStyles({

});

export default withRouter(MainLayout);