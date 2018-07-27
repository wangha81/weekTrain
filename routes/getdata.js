const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const number = req.query.number;
    const id = req.params.id;
    // console.log("Root in", number,id);

    if(number === 'NaN'){
        res.redirect('/error');
    }else if( number%1 === 0 && number>0 ){
        return res.render('getdata',{number:req.query.number});
    }else{
        res.redirect(`/getData?number=${Math.abs(parseInt(number))}`);
    };
});


router.get('/:id',(req,res)=>{
    const number = req.query.number;
    const id = req.params.id;
    // console.log(id, number, "I'm here");
 
    if(!number){
        return res.redirect(`/getData?number=${id}`);
    };
    
    
    res.render('getdata');

});


module.exports = router; 