import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { MenuList, MenuItem} from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { ClickAwayListener, Fade } from "@material-ui/core";
import { Paper , Popper} from '@mui/material'
import Team from './Team';
import TeamGBC from './TeamGBC';
import Games from './Games';
import Trainings from './Trainings';

/* copied from https://github.com/mui-org/material-ui/blob/v4.3.2/packages/material-ui/src/Menu/Menu.js#L21 */
const useMenuStyles = makeStyles({
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: "touch"
  },
  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
});
export default function Treeview() {

  
  const data= {
    id: "company",
    name: "Shareworks by Morgan Stanley",
    children: [
      {
        id: "locations",
        name: "Locations",
        children: [
          {
            id: "location1",
            name: "Calgary",
            children: [
              {
                id: "team1_1",
                name: "Lets Get Fiscal",
                children: []
              },
              {
                id: "team1_2",
                name: "JollyCo",
                children: []
              },
              {
                id: "team1_3",
                name: "Gainz Bond Crew",
                children: []
              },
              {
                id: "team1_4",
                name: "Foodies",
                children: []
              }
            ]
          },
          {
            id: "location2",
            name: "Montreal",
            children: [
              {
                id: "team2_1",
                name: "Tiger Squad",
                children: []
              },
              {
                id: "team2_2",
                name: "TRex Squad",
                children: []
              }
            ]
          },
          {
            id: "location3",
            name: "Utah",
            children: [
              {
                id: "team3_1",
                name: "Saving Private Markets",
                children: []
              },
              {
                id: "team3_2",
                name: "Global Warming",
                children: []
              },
              {
                id: "team3_3",
                name: "Ram Chargers",
                children: []
              }
            ]
          }
        ]
      },
      {
        id: "it",
        name: "IT",
        children: [
          {
            id: "4",
            name: "My open tickets",
            children: [
              {
                id: "it1",
                name: "Password Expired"
              },
              {
                id: "it2",
                name: "New Screen needed"
              }
            ]
          }
        ]
      },
      {
        id: "games",
        name: "Games",
        children: [
          {
            id: "games1",
            name: "Bingo"
          },
          {
            id: "games2",
            name: "Pictionary"
          }
        ]
      }
    ]
  };
const renderTree = (nodes) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);
const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    setOpen(true);
    const virtualElement = {
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        top: clientY,
        right: clientX,
        bottom: clientY,
        left: clientX
      })
    };
    setAnchorEl(virtualElement);
  };

  const id = open ? "faked-reference-popper" : undefined;
  const menuClasses = useMenuStyles();
  return(
  
    <div style={{ display: 'flex', padding: 30 }}>
      
    <TreeView
     style={{
       backgroundColor: '#e5e5e5',
       width: 400,
       height: window.innerHeight,
     }}
   aria-label="rich object"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpanded={["company","locations","it","games","location1","location2","location3",]}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
 >
   {renderTree(data)}

   </TreeView>
   <div  style={{
      
      width: window.innerWidth * 0.005,
     
     }} > </div>
   <div  style={{ display: 'flex' }}>
  <div  style={{
      
       width: window.innerWidth * 0.35,
     }}> <Team/><br/><TeamGBC/></div>
      <div onContextMenu={handleContextMenu} style={{
      
      width: window.innerWidth * 0.35,
     
     
     }} >
        <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Fade {...TransitionProps}>
              <Paper className={menuClasses.paper}>
                <MenuList className={menuClasses.list} autoFocus>
                  <MenuItem onClick={handleClose}>Create Outlook Meeting</MenuItem>
                  <MenuItem onClick={handleClose}>Send Teams channel message</MenuItem>
                  <MenuItem onClick={handleClose}>Get calendar for the week</MenuItem>
                </MenuList>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
        </div>
     <div > <Trainings/> </div>
     <br/><br/>
  <div > <Games/> </div>
</div>
  
 </div>
 );
}