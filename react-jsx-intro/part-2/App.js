function App(){
    return (
        <div>
            <Tweet
            name="Rennan"
            username="Rennan1"
            date={new Date().toDateString()}
            message="HI TWEET!!!!"/>
            <Tweet
            name="Mike"
            username="Mike1"
            date={new Date().toDateString()}
            message="follow me"
            />
            <Tweet
            name="Taylor"
            username="Taylor1"
            date={new Date().toDateString()}
            message="#Hashtag!"
           />

        </div>
    );
}