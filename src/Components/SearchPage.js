import React, {useState, useEffect} from 'react';
import '../Styles/SearchPage.css';
import PlayerSidebar from './PlayerSidebar';
import ArtistCard from './ArtistCard';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchPage() {
    return(
    <div className = "searchpage">
            <div className = "playerbodyheader__left">
                <SearchIcon/>
                <input type="text" placeholder = "Search for Artists, Songs, or Albums"/>
            </div>
            <h2>Your top geners</h2>
            <Card className = "cardsImgBigRoot">
                <CardActionArea>
                    <CardMedia
                    className= "cardsImgBig"
                    image="https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/Capture.PNG?alt=media&token=5d6cce06-886b-4b65-b19c-32eceb6ae414"
                    title="Contemplative Reptile"
                    />
                </CardActionArea>          
            </Card>
            <h2>Browse all</h2>
            <div className = "all_cards"> 
                
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/pod.PNG?alt=media&token=b008e234-be97-49b1-aa3e-7e082187cdbc" 
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/pop.PNG?alt=media&token=32b8910f-8272-4285-ab4c-f8eae79d68b6"
                /> 
                <ArtistCard 
                    image =  "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/rb.PNG?alt=media&token=75be0e80-b409-4dcb-bd00-65de4f31e1f3"
                    
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/rock.PNG?alt=media&token=1d636bb2-b975-4e63-bf8c-d7c07fa67abf"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/romance.PNG?alt=media&token=1213bfa4-a0da-4555-b88f-9873d20e6f11"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/sleep.PNG?alt=media&token=6d3481e3-0027-42a5-8c52-1687a0b11613"
                />
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/workout.PNG?alt=media&token=54dfceea-7d56-4123-86d9-36abd924bb4b"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/mood.PNG?alt=media&token=24cb86de-6917-49c1-b3ba-1c9c1fbdb3e1"
                />
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/new.PNG?alt=media&token=0a802b1b-de96-4110-adce-e7b7d8fc27c6"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/party.PNG?alt=media&token=d5099f96-4539-4cb8-bf97-a5a5be7c936c"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/leg.PNG?alt=media&token=26dd1632-d451-46da-a943-4df2f9c07b3e"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/latin.PNG?alt=media&token=bff982f3-16e7-44ee-b8bf-61160fcd2931"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/classical.PNG?alt=media&token=862076c7-ebcf-4260-b768-4c1fdb5b514c"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/country.PNG?alt=media&token=241c21a9-c54c-4ee5-a56d-d1d9d6c5f7b3"
                />
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/covid.PNG?alt=media&token=f9f92db6-da0d-41ae-a7ac-74077dc27384"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/discover.PNG?alt=media&token=8a615b3f-a584-4b3a-9085-c3c064798820"
                />
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/foru.PNG?alt=media&token=29a9e2f1-3d55-4bed-8c61-49a29fd2c0cb"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/gaming.PNG?alt=media&token=851001e9-e840-44f5-b20f-0d279af44d77"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/hiphop.PNG?alt=media&token=2ebd903a-7635-4b86-aa9f-c5bbc8fc97d9"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/holidays.PNG?alt=media&token=28a98f8a-d2dc-4985-b562-d3fe091b67a2"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/home.PNG?alt=media&token=6f30b52f-2c46-4865-b6e4-90d6ac8070bd"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/jazz.PNG?alt=media&token=4ef54ffb-4ea3-483b-8265-4fba60b6995d"
                />
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/chill.PNG?alt=media&token=fb4e67d6-3253-4412-9914-b10bf025bbb2"
                /> 
                <ArtistCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/slack-clone-ff2bf.appspot.com/o/car.PNG?alt=media&token=4641f97d-eea8-4212-bc20-9c9d62156337"
                />  
            </div>
        </div>
    )
}

export default SearchPage
