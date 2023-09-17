import React from 'react';
import ContactCard from './ContactCard';
import './App.css'

const App = () => {
  const bios = [
    {picUrl : "https://www.mysteryandsuspense.com/wp-content/uploads/2021/08/Robin-Cook-Medical-Thriller-Author.jpg",
    name: "Robin Cook" ,
    age: "83 years" ,
    about: "He is a surgeon and a novelist who is best known for writing medical thrillers" ,
    iLike: "I like his ability to combine his medical knowledge with fantasy to make the public aware of technological possibilities, socio-ethical problems that comes with modern medicine.",
    books: "Coma, Outbreak (Jack Stapleton series), Sphinx" ,
    awards: "New York Times Best seller"
    },
    {picUrl : "https://i.pinimg.com/originals/cd/22/7d/cd227d9d243d45aca2cf0c15a9946a1b.jpg",
    name: "Tess Gerritsen" ,
    age: "70 years",
    about: "She is a physician best known for writing medical thrillers although she started her journey writing romantic thrillers" ,
    iLike: "Her ability to write amazing mystery thrillers while combining her medical knowledge, interest in anthropology, history and music. Honestly, her books are a personal favorite!",
    books: "The Surgeon, Vanish, Body Double, The Sinner, The Mephisto Club" ,
    awards:" RITA award, Nero Award"
    },
    {
      picUrl : "https://i.pinimg.com/736x/31/14/e9/3114e960920e8151ced89485bc1befa7.jpg",
    name :"Sidney Sheldon" ,
    age :" died at 90 years",
    about : "He was a writer of broadway plays, films and novels. He remains as one of the best selling fiction writer of all time." ,
    iLike : "His suspense novels feature stories about strong and determined women who overcome all sorts of difficulties and persevere in a tough world. His books are widely read by women. ",
    books : "The Other Side of Midnight, Memories of Midnight, Bloodline, Tell me your Dreams" ,
    awards : " Academy Award for Writing Original Screenplay, Tony Award, Golden Plate Award of the American Academy of Achievement"
    },
    {
      picUrl : "http://danbrown.com/wp-content/themes/danbrown/images/db/slideshow/author/db.courter.06.jpg",
      name :"Dan Brown",
      age : " 59 years",
      about : "American author best known for his thriller novels" ,
      iLike : "Although his writing and work has been criticized widely, I enjoyed reading the intense chases that usually take place over a short period of time. His books also feature a recurring theme of cryptography, art, and conspiracy theories, which is exciting to read about. ",
      books : "Angels & Demons, The Da Vinci Code, Inferno" ,
      awards : "Goodreads Choice Awards, Indies Choice Book Award for Adult Fiction"
    },
    {
      picUrl : "https://collectionimages.npg.org.uk/std/mw07200/Agatha-Christie.jpg",
      name : "Agatha Christie" ,
      age :" died at 85 years",
      about : "One of the most well known English author of all time." ,
      iLike: "While growing up, I read all her books and I continue to be a big fan of Hercule Poirot ! ",
      books: "Murder on the  Orient Express, Death on the Nile, The ABC Murders" ,
      awards: "Edgar Grand Master Award, Anthony Award for the Best Writer, New York Drama Critic's Circle Award"
    }
  ]
return(
  <div>
    { bios.map((bio, index) => {
      return(<ContactCard key={index}
      picUrl = {bio.picUrl}
      name={bio.name} 
      age={bio.age} 
      about={bio.about}
      iLike={bio.iLike}
      books={bio.books} 
      awards={bio.awards}/>


      )


    })}
{/* <ContactCard picUrl = "https://via.placeholder.com/300"
name="Robin Cook" age="83 years" 
about="He is a surgeon and a novelist who is best known for writing medical thrillers" 
iLike="I like his ability to combine his medical knowledge with fantasy to make the public aware of technological possibilities, socio-ethical problems that comes with modern medicine."
books="Coma, Outbreak (Jack Stapleton series), Sphins" 
awards="New York Times Best seller"/>
<ContactCard picUrl = "https://via.placeholder.com/300"
name="Tess Gerritsen" age="70 years"
about="She is a physician best known for writing medical thrillers although she started her journey writing romantic thrillers" 
iLike="Her ability to write amazing mystery thrillers while combining her medical knowledge, interest in anthropology, history and music. Honestly, her books are a personal favorite!"
books="The Surgeon, Vanish, Body Double, The Sinner, The Mephisto Club" 
awards=" RITA award, Nero Award"/>
<ContactCard picUrl = "https://via.placeholder.com/300"
name="Sidney Sheldon" age=" died at 90 years"
about="He was a writer of broadway plays, films and novels. He remains as one of the best selling fiction writer of all time." 
iLike="His suspense novels mostly have stories about determined women who persevere in a tough world run by hostile men."
books="The Other Side of Midnight, Memories of Midnight, Bloodline, Tell me your Dreams" 
awards=" Academy Award for Writing Original Screenplay, Tony Award, Golden Plate Award of the American Academy of Achievement"/>
<ContactCard picUrl = "https://via.placeholder.com/300"
name="Dan Brown" age=" 59 years"
about="American author best known for his thriller novels" 
iLike="Although his writing and work has been criticized widely, I enjoyed reading the intense chases that usually take place over a short period of time. His books also feature a recurring theme of cryptography, art, and conspiracy theories, which is exciting to read about. "
books="Angels & Demons, The Da Vinci Code, Inferno" 
awards="Goodreads Choice Awards, Indies Choice Book Award for Adult Fiction"/>
<ContactCard picUrl = "https://via.placeholder.com/300"
name="Agatha Christie" age=" died at 85 years"
about="One of the most well known English author of all time." 
iLike="While growing up, I read all her books and I continue to be a big fan of Hercule Poirot ! "
books="Murder on the  Orient Express, Death on the Nile, The ABC Murders" 
awards="Edgar Grand Master Award, Anthony Award for the Best Writer, New York Drama Critic's Circle Award"/> */}

</div>
)
}
export default App;
