import React from 'react'
import { DrawerMenu } from './drawer.types'
import { Typography } from '@material-ui/core'

// MAIN MENU ICONS

// Blog
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
// Users
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined'

// BLOG SUB MENU ICONS
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined'

// ACCOUNT SUB MENU ICONS
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'

import { CSSProperties } from '@material-ui/core/styles/withStyles'
import theme from 'modules/app/app.theme'
import i18n from 'core/i18n/i18n'
import { urls } from 'modules/routes/routes.constants.urls'
import DrawerMenuSubItem from './drawer.menu.sub.item'

const classes: CSSProperties | any = {
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingLeft: theme.spacing(3.5),
	},
	typography: {
		marginLeft: theme.spacing(1),
	},
	link: {
		textDecoration: 'none',
		width: '100%',
		color: 'black',
	},
}

/**
 * Generator for building menu items dynamically
 */
const generateAction = (title: string, icon: React.FC, to: string = '') => (
	<DrawerMenuSubItem style={classes.listItem} icon={icon} href={to}>
		<Typography style={classes.typography}>{title}</Typography>
	</DrawerMenuSubItem>
)

const blogActions = [
	generateAction(i18n.t('blog.posts'), DescriptionOutlinedIcon, '/'),
	generateAction(i18n.t('blog.categories'), CategoryOutlinedIcon),
	generateAction(i18n.t('blog.comments'), ChatBubbleOutlineOutlinedIcon),
	generateAction(i18n.t('blog.settings'), SettingsApplicationsOutlinedIcon),
]
const userActions = [
	generateAction(
		i18n.t('users.accounts'),
		PermIdentityOutlinedIcon,
		urls.users,
	),
]

export const defaultDrawerMenu: DrawerMenu[] = [
	{
		displayName: i18n.t('blog.blog'),
		icon: ChromeReaderModeIcon,
		children: blogActions,
	},
	{
		displayName: i18n.t('users.users'),
		icon: PeopleOutlineOutlinedIcon,
		children: userActions,
	},
]
