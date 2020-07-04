import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <ExpansionPanelSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <ExpansionPanelSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography>What is genome and gene?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          DNA is the molecule that is the hereditary material in all living cells. ... A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA. DNA is long and skinny, capable of contorting like a circus performer when it winds into chromosomes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is the function of a genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The human genome is a complete set of nucleic acid sequences for humans, encoded as DNA within the 23 chromosome pairs in cell nuclei and in a small DNA molecule found within individual mitochondria.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does every cell contain the entire genome?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          A genome is an organism's complete set of DNA, including all of its genes. Each genome contains all of the information needed to build and maintain that organism. In humans, a copy of the entire genome—more than 3 billion DNA base pairs—is contained in all cells that have a nucleus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
