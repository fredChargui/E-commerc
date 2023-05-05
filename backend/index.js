const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./database/index')
const { getAll, getOne, addOne } = require('./models/users')
const { getAllPosts, addOnePosts, deleteOne } = require('./models/posts')
// const { getAll, addOne, getOne } = require('./models/users')
// const { getAllPer, addOnePre } = require('./models/peripherique')
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/api/users/getAll',(req,res)=>{
    getAll((err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else {
            res.status(200).json(result)
        }
    })
})
app.post('/api/users/addOne',(req,res)=>{
    getOne
    ((err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
    
            if(result.length>0){
                res.status(500).json({success:false,message:'user already exist'})
            }
            else{
                addOne((err,result)=>{
                         if(err){
                             res.status(500).json(err)
                         }
                         else {
                           
                             res.status(200).json({success:true,message:result})
                         }
                     },req.body)
            }
        }
    },[req.body.email,req.body.password])

})
app.get('/api/users/:email/:password',(req,res)=>{
    getOne((err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json(result)
        }
    },[req.params.email,req.params.password])
})
app.get('/api/posts/getAll',(req,res)=>{
    getAllPosts((err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else {
            res.status(200).json(result)
        }
    })
})
app.post('/api/posts/create', (req, res) => {
    addOnePosts((err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    }, req.body);
  });
  app.delete('/api/posts/:id',(req,res)=>{
    deleteOne((err,results)=>{
        if(err){
            res.status(500).json(err)
        }
        else {
            res.status(500).json(results)
        }
    },req.params.id)
 })
  
app.listen(port,()=>{
    console.log('server lisent')
})