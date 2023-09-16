import React from 'react';

import './addReviewer.css';


const addReviewer = () => {
    return (
        <>

<h1>The input element</h1>

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/>
  <input type="submit" value="Submit"/>
</form>
        </>
    );
}