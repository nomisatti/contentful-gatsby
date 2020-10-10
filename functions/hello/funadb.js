const fuunadb = require('faunadb')
const fuunadbQuery = fuunadb.query;
const dotenv = require('dotenv');
dotenv.config();

(async () => {

    if ('fnAD3sxQ67ACBxmxdEmCjtl68gzqV8yH7Sa-rnC2') {
        const client = new fuunadb.Client({ secret: 'fnAD3sxQ67ACBxmxdEmCjtl68gzqV8yH7Sa-rnC2'})

         
        try {

            /*Create Database
            var result = await client.query(
                fuunadbQuery.CreateDatabase({
                    name: 'testDataBase'
                })
            )
           --------------------

            /*Create Key
            var result = await client.query(
                fuunadbQuery.CreateKey({
                    database: fuunadbQuery.Database('testDataBase'),
                    role: 'server' 
                })
            )
            
            -------------------------------
           Create Container

           var result = await client.query(
               fuunadbQuery.CreateCollection({name : "posts"})
           );

           
            ------------
            
           Create Index
           var result = await client.query(
               fuunadbQuery.CreateIndex({
                   name : 'posts_by_title',
                   source: fuunadbQuery.Collection('posts'),
                   terms : [{field: ['data' ,'title']}],
               })
           )
          /*
          -----------------
            Create Documents
           var result = await client.query(
               fuunadbQuery.Create(
                   fuunadbQuery.Collection('posts'),
                   {data : {title : 'My First Post'}}
               )
           )
            
           ----------------------------------         
            Create Multiple Documents
            var result = await client.query(
                fuunadbQuery.Map(
                    [
                        'My 2nd Posts' ,
                        'My Third Post',
                        'My 4th Post'
                    ],
                fuunadbQuery.Lambda(
                    'post_title_var',
                    fuunadbQuery.Create(
                        fuunadbQuery.Collection('posts'),
                        {data : {title: fuunadbQuery.Var('post_title_var')}}
                    )
                )
                )
            )

          
                        -------------------
             Reterive data from database using Ref

            */
            var result = await client.query(
                fuunadbQuery.Get(fuunadbQuery.Ref(fuunadbQuery.Collection('posts'), '278885885056909831'))
            )

              
            /*
             -------------------
           
            Reterive data from database using Index
            var result = await client.query(
                fuunadbQuery.Get(
                    fuunadbQuery.Match(fuunadbQuery.Index('posts_by_title') , 'My 4th Post')
                    )
            )

            -----
             Update Record in Database
             
            var resulut = await  client.query(
                fuunadbQuery.Update(
                    fuunadbQuery.Ref(fuunadbQuery.Collection('posts'),"278885885056909831"),
                    {
                        data : {title: "This Title is be updated from the code . :P"}
                    }
                )
            )

            ------------

            Replace Record in Database
           
           var result = await client.query(
               fuunadbQuery.Replace(
                   fuunadbQuery.Ref(fuunadbQuery.Collection('posts'),"278885885056909831"),
                   {data : {title : "This field is beign replaced"}}
               )
           )

           -----------------

           Delete Record from Database

           
           var result = await client.query(
               fuunadbQuery.Delete(
                   fuunadbQuery.Ref(fuunadbQuery.Collection('posts'),"278885885056909831")
               )
           )
            */
            console.log("result : ", result)
            
        }
        catch (error) {
            if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
                console.log('Database with this name already exists');
            }
            else {
                console.log('Unknow Error: ');
                console.log(error);
            }
        }
    }else {
        console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup');
      }

})();