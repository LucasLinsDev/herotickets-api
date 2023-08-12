
import request from 'supertest'
import { App } from '../app';
import { connect ,close} from '../infra/database';

const app = new App();


const express = app.app;
beforeAll(async () => {
    await connect();
});

afterAll(async () => {
    await close();
});



describe("Event test",()=>{

    it("/POST Event", async()=>{
        const event ={
            title:"Jorge e Mateus",
            price:[{sector:'Pista',amount:'20'}],
            description:'Evento descrição',
            city:'Belo Horizonte',
            location:{
                latitude:"-20.0249057",
                longitude:"-43.0249057"
            },
            coupons:[],
            date:new Date(),
            participants:[],
        }

        const response = await  request(express)
        .post('/events')
        .field('title',event.title)
        .field('price[sector]',event.price[0].sector)
        .field('price[amount]',event.price[0].amount)
        .field('description',event.description)
        .field('city',event.city)
        .field('location[latitude]',event.location.latitude)
        .field('location[longitude]',event.location.longitude)
        .field('coupons',event.coupons)
        .attach('banner','C:/Users/LUCAS LINS/Downloads/pe.jpeg')
        .attach('flyers','C:/Users/LUCAS LINS/Downloads/pe.jpeg')
        .attach('flyers','C:/Users/LUCAS LINS/Downloads/pe.jpeg');
        if(response.error){
            console.log(response.error)
        };
        expect(response.status).toBe(201);
        expect(response.body.message).toEqual({message:'Evento criado com sucesso.'})
     

    })

})