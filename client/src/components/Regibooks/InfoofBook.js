import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SubjectIcon from '@material-ui/icons/Subject';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Divider from '@material-ui/core/Divider';


class InfoofBook extends Component {
    constructor() {
        super();
        this.state = { 
            bookname : "벡칼"
        };
    }
    render() {
        
        return (
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MenuBookIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bookname" secondary={this.props.bookname} />
                </ListItem>
                <Divider component="li" />
                <li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <RecentActorsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Author" secondary={this.props.author} />
                </ListItem>
                </li>
                <Divider component="li" />
                <li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SubjectIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Subject" secondary={this.props.subject} />
                </ListItem>
                </li>
                <Divider component="li" />
                <li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CategoryIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Subject_category" secondary={this.props.subject_category} />
                </ListItem>
                </li>
                <Divider component="li" />
                <li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmojiEmotionsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Registerer" secondary={this.props.registerer} />
                </ListItem>
                </li>
            </List>
        );
    }
}

export default InfoofBook;