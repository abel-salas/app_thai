
exports.login = (req, res) => {
    console.log('__________ post login  __________');
    req.session.user = req.body.username;
    if (req.session.user) {
        console.log('authenticated: TRUE', req.session.user);
        res.send({session:'User logged'});
    } else {
        console.log('authenticaded: FALSE');
        res.send({session:'User not logged'});
    }
};

exports.logout = (req, res) => {
    console.log('__________ post logout  __________');
    delete req.session.user;
    console.log('req.session.user: ', req.session.user);
    res.send({session:'Session User deleted'});
};

exports.authenticated = (req, res) => {
    console.log('__________ get authenticated  __________');
    console.log('req.session.user: ', req.session.user);
    if (req.session.user) {
        console.log('authenticated: TRUE');
        res.send({session:'User logged'});
    } else {
        console.log('authenticaded: FALSE');
        res.send({session:'User not logged'});
    }
};

