import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../contextCopy/firebase/firebaseContext';
import { Loader } from '../components/Loader';
export const Home = () => {
    const {fetchNotes, loading, notes} = useContext(FirebaseContext);
    useEffect(() => {
        fetchNotes()
    }, [])
    return <Fragment>
        <Form/>
        <hr/>
        {loading ? <Loader/> : <Notes notes={notes}/>}
    </Fragment>
}