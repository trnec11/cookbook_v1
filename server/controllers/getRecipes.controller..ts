import {Request, Response, response} from 'express';

import axios from 'axios';

const ApiToken = '43fab38fe8msh9bf5a9bd95be074p1a67aejsn0c67c622911b'
let testData = '';
const linkSummary = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary';
const linkInfo = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/22/information';

axios.get(linkSummary, {
    headers: {'X-RapidAPI-Key': ApiToken}
})
.then((response: { data: string; }) => {
    console.log(response.data);
    let testData = response.data;
  })
  .catch((error: any) => {
    console.log(error);
  });

  
export let index = (req: Request, res: Response) => {
    res.render('../server/views/index', { title: 'pug', message: 'CDESK v. 4'});
}


