import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBtnWrap,SidebarWrapper,SidebarRoute,SidebarLink,SidebarMenu} from "./SidebarElments"

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="myplaces" onClick={toggle}>
                        My Places
                    </SidebarLink>
                    <SidebarLink to="places/new" onClick={toggle}>
                        Add Place
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;
