
export function Todos({todo}){
    return <div>
        {todo.map(function(t){
            return (<div>
                <h1>{t.title}</h1>
                <h2>{t.description}</h2>
                <button>{t.completed==true ? "Completed" : " Mark as not  Completed"}</button> 
            </div>
            );
        })}
    </div>
}