import React, { Component } from 'react'

// const MovieForm = (props)  => {
//     const {title, year} = props.movie;
//     return <div >
//         <div>
//             <input name="title" placeholder="Enter title"  defaultValue={title}    />
//         </div>
//         <div>
//             <input name="year" placeholder="Enter year" defaultalue={year} />
//         </div>
//         <div>
//             <button>Save</button>
//         </div>
//     </div>
// }

class MovieForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            movie: { ...(props.movie)}
        }

        
    }

    handleChange(event){
        
        const elem = event.target;
        const movie = { ...this.state.movie, [elem.name]:elem.value  }; 
        this.setState({ movie });
    }

    

    render(){
        const {title, year} = this.state.movie;
        return <div >
            <div>
                <input name="title" placeholder="Enter title"  
                    value={title}
                    onChange={(e) => this.handleChange(e)}
                />
            </div>
            <div>
                <input name="year" placeholder="Enter year" 
                    value={year}
                    onChange={(e)=> this.handleChange(e)}
                 />
            </div>
            <div>
                <button onClick={() => this.props.movieSaved({...this.state.movie}) }  >Save</button>
            </div>
        </div>
    }

}

export default MovieForm;