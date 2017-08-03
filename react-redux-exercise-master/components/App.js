import React from 'react';

import IntelligentExerciseZero from '../containers/IntelligentExerciseZero';
import IntelligentExerciseOne from '../containers/IntelligentExerciseOne';
import IntelligentExerciseTwo from '../containers/IntelligentExerciseTwo';
import IntelligentExerciseThree from '../containers/IntelligentExerciseThree';
import IntelligentEntrenamiento1 from '../containers/IntelligentEntrenamiento1';
import IntelligentBoxColor from '../containers/IntelligentBoxColor';
import IntelligentShoppingCard from '../containers/IntelligentShoppingCard';
import IntelligentComentarios from '../containers/IntelligentComentarios';
import IntelligentDisplay from '../containers/IntelligentDisplay';

// This is where you build the skeleton of your App
// by displaying the right intelligent components
// Meet me in ../components/ExerciseZero after you've understood this file
const App = () => (
    <div>
        <IntelligentExerciseZero />
        <IntelligentExerciseOne />
        <IntelligentExerciseTwo />
        <IntelligentExerciseThree />
        <IntelligentEntrenamiento1 />
        <IntelligentBoxColor />
        <IntelligentShoppingCard />
        <IntelligentComentarios />
        <IntelligentDisplay />
    </div>
);

export default App;
