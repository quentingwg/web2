var express = require('express');
var router = express.Router();

var FILMS=[
  {
    id: 1,
    title: 'titanic',
    duration: '140',
    budget: '250',
    link: 'lienTita',
  },
  {
    id: 2,
    title:'Pulp Fiction',
    duration: '130',
    budget:'210',
    link:'linkPulp',
  },
];


/* GET home page. */
router.get('/', function(req, res, next) {
  const minimumFilmDuration= 
    req?.query ? parseInt(req.query['minimum-duration'])
    :undefined;

  if(minimumFilmDuration && typeof minimumFilmDuration !== 'number' || minimumFilmDuration<0)
    return res.sendStatus(400);

  if(!minimumFilmDuration) return res.json(FILMS);
  
  const filmsReachingDuration = FILMS.filter((film)=> film.duration >= minimumFilmDuration);
  return res.json(filmsReachingDuration);


});

router.get('/:id', (req,res)=>  {
  console.log(`Get /pizzas/${req.params.id}`);
  const foundIndex= FILMS.findIndex((film)=> film.id == req.params.id)
  if(foundIndex<0) return res.sendStatus(400);
  var foundFilm= FILMS[foundIndex];

  res.json(foundFilm);
});

router.post('/', (req,res)=> {
  const title= req?.body?.title !==0 ? req.body.title : undefined;
  const duration= req?.body?.duration !==0 ? req.body.duration : undefined;
  const budget= req?.body?.budget !==0 ? req.body.budget : undefined;
  const link= req?.body?.link !==0 ? req.body.link : undefined;


  console.log('POST /films');
  if(!title || !duration || !budget || !link) return res.sendStatus(400);
  const lastItemIndex = FILMS?.length !==0 ? FILMS.length-1 : undefined;
  const lastId= lastItemIndex !== undefined ? FILMS[lastItemIndex].id: 0;
  const nextId= lastId+1;
  console.log(typeof(lastId));

  
  
 
 
  const newFilm = {
    id: nextId,
    title: title, 
    duration: duration,
    budget: budget,
    link: link,
  }
  FILMS.push(newFilm);
  res.json(newFilm);

});

//TODO patche and delete




module.exports = router;
