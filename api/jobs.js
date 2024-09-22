export default (req, res) => {
    const jobs = require('../../src/jobs.json'); 
    res.status(200).json(jobs);
  };
  