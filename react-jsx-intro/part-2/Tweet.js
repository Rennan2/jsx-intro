/**
 * props 
 * name, username, date, message
 */

function Tweet({ date, message,username, name}) {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    );
}