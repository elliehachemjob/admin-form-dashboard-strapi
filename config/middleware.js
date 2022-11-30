module.exports = ({ env }) => ({
 settings: {
  cache: {
   enabled: true,
   models: ["", "admin", 'answer', "question", "user - answer"],
  },
  gzip: {
   enabled: true,
   options: {
    br: false
   }
  }
 }
});