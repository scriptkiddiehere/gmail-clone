import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from '@material-ui/icons/Inbox';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarIcon from '@material-ui/icons/Star';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className = "sidebar">
            <Button
                startIcon={<AddIcon fontSize="large"/>}
                className="sidebar_compose"
                onClick={() => dispatch(openSendMessage())} 
            >
                Compose
                </Button>

                <SidebarOption Icon={InboxIcon} title="Inbox" number={10} selected={true}/>
                <SidebarOption Icon={StarIcon} title="Starred" />
                <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
                <SidebarOption Icon={LabelImportantIcon} title="Important" />
                <SidebarOption Icon={NearMeIcon} title="Sent" />
                <SidebarOption Icon={NoteIcon} title="Drafts" />
                <SidebarOption Icon={ExpandMoreIcon} title="More" />

                <div className="sidebar_footer">
                    <div className="sidebar_footerIcons">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <DuoIcon />
                        </IconButton>
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar
