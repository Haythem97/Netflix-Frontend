import gql from "graphql-tag";

export const getFilms = gql`
    query {
        getFilms{
            id,
            title,
            description,
            src,
            categorie
            date}
    }
`
export const getFilm = gql`
    query getFilm($id:ID){
        getFilm (id:$id){
        id,
        title,
        description,
        src,
        categorie
        date}
    }
`