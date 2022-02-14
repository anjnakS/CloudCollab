import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { fade, makeStyles } from '@material-ui/core/styles';

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
 
  const useTreeItemStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.secondary,
      '&:focus > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 12,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
    expanded: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
      width: 'auto'
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  }));
 
  const classes = useTreeItemStyles();
  
    return (
      <div style={{ display: 'flex', padding: 30 }}>
      
            <TreeView
          style={{
            backgroundColor: '#e5e5e5',
            width: 400,
            height: window.innerHeight,
          }}
          
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={['100','1000','0','1','2','3','4','5','6','7','8','9','10','11','15','16','20','21','22']}
          
        >
          <TreeItem nodeId="100" label="Shareworks By Morgan Stanley">
          <TreeItem nodeId="1000" label="Locations"classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label
      }}>
          <TreeItem nodeId="0" label="Calgary">
            <TreeItem nodeId="1" label="Lets Get Fiscal" />
            <TreeItem nodeId="2" label="Foodies" />
            <TreeItem nodeId="3" label="Gainz Bond Crew" />
            <TreeItem nodeId="4" label="JollyCo" />
          </TreeItem>
          <TreeItem nodeId="5" label="Montreal">
            <TreeItem nodeId="6" label="Montreal1" />
            <TreeItem nodeId="7" label="Montreal2" />
            <TreeItem nodeId="8" label="Montreal3" />
            <TreeItem nodeId="9" label="Montreal4" /> 
            </TreeItem>
          </TreeItem>
         
          <TreeItem nodeId="10" label="IT - Public">
            <TreeItem nodeId="11" label="Outstanding tickets for me" />
           
          </TreeItem>
          <TreeItem nodeId="15" label="HR">
          <TreeItem nodeId="16" label="Outstanding tickets for me" />
            </TreeItem>
            <TreeItem nodeId="20" label="Games">
            <TreeItem nodeId="21" label="Bingo" />
            <TreeItem nodeId="22" label="Pictionary" />
  
          </TreeItem>
          </TreeItem>
        </TreeView>
  
        <div style={{ margin: 50 }}></div>
       
      </div>
    );
  }
  