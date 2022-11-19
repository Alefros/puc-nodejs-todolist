exports.get = (req, res) => {
    console.log('Get');
    res.send('Ok');
};

exports.getAll = (req, res) => {
    console.log('getAll');
    res.send('Ok getAll');

};

exports.add = (req, res) => {
    console.log('add');
    res.send('Ok add');

};

exports.update = (req, res) => {
    console.log('update');
    res.send('Ok update');

};

exports.delete = (req, res) => {
    console.log('delete');
    res.send('Ok delete');

};