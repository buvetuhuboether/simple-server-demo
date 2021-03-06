'use strict';

const path = require( 'path' );
const express = require( 'express' );

const router = express.Router();

router.use( express.static( path.join( __dirname, '..', 'public', 'subdomain1' ) ) );

module.exports = router;