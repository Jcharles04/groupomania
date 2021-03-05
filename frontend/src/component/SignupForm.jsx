import React from 'react';

export default function Inscription () {
    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit=""/*{this.handleSubmit}*/>
                <div>
                    <label htmlFor='name'>Nom</label>
                    <input type='text' name='name' id='name' /*value={this.state.login} onChange={e => this.setState({'login': e.target.value})}*/ />
                </div>
                <div>
                    <label htmlFor='serv'>Service</label>
                    <input type='text' name='serv' id='serv' /*value={this.state.password} onChange={e => this.setState({'password': e.target.value})} *//>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' /*value={this.state.password} onChange={e => this.setState({'password': e.target.value})} *//>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}