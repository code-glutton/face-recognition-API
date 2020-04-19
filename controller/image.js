const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: '025df3bdf694480394406ad4c60773ac'
   });
const handleApiCall = (req,res) =>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data)
    })
    .catch(err => res.status(400).json('unable to work with API'))
}
   
const handleImagePut = (req,res,knex) =>{
    knex('users')
    .where('id','=', req.body.id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
            }).catch(err => res.status(400).json('unable to get user'));
  

}

module.exports = {
    handleImagePut: handleImagePut,
    handleApiCall: handleApiCall
}