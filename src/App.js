import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
    
    <div className="Conteneur">
    <section>
        <h2>Formulaire d' enregistrement </h2>
      
       
        
        
        
        <fieldset> 
  
        <table>
          <tr>
          <td> 
               
            <legend> Contact</legend>
            <br/>
            <fieldset>
              <legend>civilite</legend> 

              
              
            <br/>
            <tr><label for="nom" > nom:</label><input id="nom"  type="text" required="required" /></tr><br/>
            <tr>
            <label for="prenom">prenmon: </label><input id="prenom" type="text" required="required"/><br/>
            </tr>
            <label for="adresse">adresse: </label><input id="adresse" type="text" required="required" placeholder="Example:32 Rue vererie,1075-siegen" /><br/>
            <tr>
            <label for="Telephone"> telephone:</label> <input placeholder="EX: 1763254"  id="telephone" type="tel" /><br/>
            </tr>
            <tr>
            <label for="Email"> Email:</label> <input id="mail" type="email" required="required" placeholder="Ex:arety@gmail.fr"/><br/>
            </tr>
            </fieldset>
          </td>
          </tr>
  
          <tr>
          <td>
              
            <fieldset>
              <legend>Information personelles</legend>
              <label for="datenaiss" > date de naissance:</label><input id="datenaiss"  type="date"/><br/>
              
               <br/>
               <label for="nom de projet" > nom de projet:</label><input id="nom de projet"  type="text" required="required" /> <br/>
            </fieldset>
            
            
          </td>
        </tr>
  
          <tr>
            <td>  <br/><br/>
           
              <label for="message"> Liste  des taches </label><textarea id="message" cols="40" rows="4" required="required"
               placeholder="saisir les taches ici"></textarea>
            </td> 

            <td> <input id="Submit1" type="submit" value="envoyer"/>
                 <input id="Reset1" type="reset" value="effacer"/>
                 <button type="button" onclick="Validation_form()">test de validite</button>
                
            </td>
          </tr>
          
  
  
        </table>
  
      </fieldset>

    </section> 
    
  </div>
  
        
      </header>

      
    </div>
  );
}

export default App;
