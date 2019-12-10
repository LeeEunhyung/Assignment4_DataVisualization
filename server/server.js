const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const con = require('./config/db');

app.get('/api/host', (req, res) => {
    res.send({ host: 'LEH' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.post('/test', (req, res) => {
    var result = [
        무단횡단 = 0,
        보행노인 = 0,
        보행어린이 = 0,
        스쿨존어린이 = 0,
        자전거 = 0
    ];

    var sql = "select 사고유형구분, sum(사망자수) as 사망자수 from accident group by 사고유형구분;";

    con.query(sql, function (err, row1) {
        if (err) { console.log(err) }
        else {
            for (var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result.무단횡단 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result.보행노인 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result.보행어린이 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result.스쿨존어린이 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '자전거') {
                    result.자전거 = row1[i].사망자수;
                }
            }

            res.send(result);
        }
    })
})

app.post('/aar', (req, res) => {
    var result = {
        ar09: 0,
        ar10: 0,
        ar11: 0,
        ar12: 0,
        ar13: 0,
        ar14: 0,
        ar15: 0,
        ar16: 0,
        ar17: 0,
        ar18: 0
    }

    var sql1 = "SELECT a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 FROM ( select count(*) c1 from c2018 ) a1, ( select count(*) c2 from c2017 ) a2, ( select count(*) c3 from c2016 ) a3, ( select count(*) c4 from c2015 ) a4, ( select count(*) c5 from c2014 ) a5, ( select count(*) c6 from c2013 ) a6, ( select count(*) c7 from c2012 ) a7, ( select count(*) c8 from c2011 ) a8, ( select count(*) c9 from c2010 ) a9, ( select count(*) c0 from c2009 ) a0";
    var sql2 = "SELECT a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 FROM ( select count(*) c1 from c2018 where Arrest = 'TRUE' ) a1, ( select count(*) c2 from c2017 where Arrest = 'TRUE' ) a2, ( select count(*) c3 from c2016 where Arrest = 'TRUE' ) a3, ( select count(*) c4 from c2015 where Arrest = 'TRUE' ) a4, ( select count(*) c5 from c2014 where Arrest = 'TRUE' ) a5, ( select count(*) c6 from c2013 where Arrest = 'TRUE' ) a6, ( select count(*) c7 from c2012 where Arrest = 'TRUE' ) a7, ( select count(*) c8 from c2011 where Arrest = 'TRUE' ) a8, ( select count(*) c9 from c2010 where Arrest = 'TRUE' ) a9, ( select count(*) c0 from c2009 where Arrest = 'TRUE' ) a0"

    con.query(sql1, function (err, row1) {
        if (err) { console.log(err) }
        else {
            con.query(sql2, function (err, row2) {
                if (err) { console.log(err) }
                else {
                    result.ar18 = row2[0].c1 / row1[0].c1
                    result.ar17 = row2[0].c2 / row1[0].c2
                    result.ar16 = row2[0].c3 / row1[0].c3
                    result.ar15 = row2[0].c4 / row1[0].c4
                    result.ar14 = row2[0].c5 / row1[0].c5
                    result.ar13 = row2[0].c6 / row1[0].c6
                    result.ar12 = row2[0].c7 / row1[0].c7
                    result.ar11 = row2[0].c8 / row1[0].c8
                    result.ar10 = row2[0].c9 / row1[0].c9
                    result.ar09 = row2[0].c0 / row1[0].c0
                    res.send(result)
                }
            })
        }
    })
})

app.post('/grp', (req, res) => {

    var result = {
        gr09: 0,
        gr10: 0,
        gr11: 0,
        gr12: 0,
        gr13: 0,
        gr14: 0,
        gr15: 0,
        gr16: 0,
        gr17: 0,
        gr18: 0,
        ar09: 0,
        ar10: 0,
        ar11: 0,
        ar12: 0,
        ar13: 0,
        ar14: 0,
        ar15: 0,
        ar16: 0,
        ar17: 0,
        ar18: 0
    }

    var sql1 = "SELECT a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 FROM ( select count(*) c1 from c2018 ) a1, ( select count(*) c2 from c2017 ) a2, ( select count(*) c3 from c2016 ) a3, ( select count(*) c4 from c2015 ) a4, ( select count(*) c5 from c2014 ) a5, ( select count(*) c6 from c2013 ) a6, ( select count(*) c7 from c2012 ) a7, ( select count(*) c8 from c2011 ) a8, ( select count(*) c9 from c2010 ) a9, ( select count(*) c0 from c2009 ) a0";
    var sql2 = "select a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 from ( select COUNT(*) c1 from c2018 where PrimaryType like 'wea%' ) a1, ( select COUNT(*) c2 from c2017 where PrimaryType like 'wea%' ) a2, ( select COUNT(*) c3 from c2016 where PrimaryType like 'wea%' ) a3, ( select COUNT(*) c4 from c2015 where PrimaryType like 'wea%' ) a4, ( select COUNT(*) c5 from c2014 where PrimaryType like 'wea%' ) a5, ( select COUNT(*) c6 from c2013 where PrimaryType like 'wea%' ) a6, ( select COUNT(*) c7 from c2012 where PrimaryType like 'wea%' ) a7, ( select COUNT(*) c8 from c2011 where PrimaryType like 'wea%' ) a8, ( select COUNT(*) c9 from c2010 where PrimaryType like 'wea%' ) a9, ( select COUNT(*) c0 from c2009 where PrimaryType like 'wea%' ) a0";

    con.query(sql1, function (err, row1) {
        if (err) { console.log(err) }
        else {
            con.query(sql2, function (err, row2) {
                if (err) { console.log(err) }
                else {
                    result.ar18 = row1[0].c1
                    result.gr18 = row2[0].c1
                    result.ar17 = row1[0].c2
                    result.gr17 = row2[0].c2
                    result.ar16 = row1[0].c3
                    result.gr16 = row2[0].c3
                    result.ar15 = row1[0].c4
                    result.gr15 = row2[0].c4
                    result.ar14 = row1[0].c5
                    result.gr14 = row2[0].c5
                    result.ar13 = row1[0].c6
                    result.gr13 = row2[0].c6
                    result.ar12 = row1[0].c7
                    result.gr12 = row2[0].c7
                    result.ar11 = row1[0].c8
                    result.gr11 = row2[0].c8
                    result.ar10 = row1[0].c9
                    result.gr10 = row2[0].c9
                    result.ar09 = row1[0].c0
                    result.gr09 = row2[0].c0
                    res.send(result);
                }
            })
        }
    })
})

app.post('/grar', (req, res) => {

    var result = {
        gr09: 0,
        gr10: 0,
        gr11: 0,
        gr12: 0,
        gr13: 0,
        gr14: 0,
        gr15: 0,
        gr16: 0,
        gr17: 0,
        gr18: 0,
        ar09: 0,
        ar10: 0,
        ar11: 0,
        ar12: 0,
        ar13: 0,
        ar14: 0,
        ar15: 0,
        ar16: 0,
        ar17: 0,
        ar18: 0
    }

    var sql1 = "select a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 from ( select COUNT(*) c1 from c2018 where PrimaryType like 'wea%' ) a1, ( select COUNT(*) c2 from c2017 where PrimaryType like 'wea%' ) a2, ( select COUNT(*) c3 from c2016 where PrimaryType like 'wea%' ) a3, ( select COUNT(*) c4 from c2015 where PrimaryType like 'wea%' ) a4, ( select COUNT(*) c5 from c2014 where PrimaryType like 'wea%' ) a5, ( select COUNT(*) c6 from c2013 where PrimaryType like 'wea%' ) a6, ( select COUNT(*) c7 from c2012 where PrimaryType like 'wea%' ) a7, ( select COUNT(*) c8 from c2011 where PrimaryType like 'wea%' ) a8, ( select COUNT(*) c9 from c2010 where PrimaryType like 'wea%' ) a9, ( select COUNT(*) c0 from c2009 where PrimaryType like 'wea%' ) a0";
    var sql2 = "select a1.c1, a2.c2, a3.c3, a4.c4, a5.c5, a6.c6, a7.c7, a8.c8, a9.c9, a0.c0 from (select COUNT(*) c1 from c2018 where PrimaryType like 'wea%' and Arrest = 'TRUE') a1, (select COUNT(*) c2 from c2017 where PrimaryType like 'wea%' and Arrest = 'TRUE') a2, (select COUNT(*) c3 from c2016 where PrimaryType like 'wea%' and Arrest = 'TRUE') a3, (select COUNT(*) c4 from c2015 where PrimaryType like 'wea%' and Arrest = 'TRUE') a4, (select COUNT(*) c5 from c2014 where PrimaryType like 'wea%' and Arrest = 'TRUE') a5, (select COUNT(*) c6 from c2013 where PrimaryType like 'wea%' and Arrest = 'TRUE') a6, (select COUNT(*) c7 from c2012 where PrimaryType like 'wea%' and Arrest = 'TRUE') a7, (select COUNT(*) c8 from c2011 where PrimaryType like 'wea%' and Arrest = 'TRUE') a8, (select COUNT(*) c9 from c2010 where PrimaryType like 'wea%' and Arrest = 'TRUE') a9, (select COUNT(*) c0 from c2009 where PrimaryType like 'wea%' and Arrest = 'TRUE') a0";

    con.query(sql1, function (err, row1) {
        if (err) { console.log(err) }
        else {
            con.query(sql2, function (err, row2) {
                if (err) { console.log(err) }
                else {
                    result.ar18 = row1[0].c1
                    result.gr18 = row2[0].c1
                    result.ar17 = row1[0].c2
                    result.gr17 = row2[0].c2
                    result.ar16 = row1[0].c3
                    result.gr16 = row2[0].c3
                    result.ar15 = row1[0].c4
                    result.gr15 = row2[0].c4
                    result.ar14 = row1[0].c5
                    result.gr14 = row2[0].c5
                    result.ar13 = row1[0].c6
                    result.gr13 = row2[0].c6
                    result.ar12 = row1[0].c7
                    result.gr12 = row2[0].c7
                    result.ar11 = row1[0].c8
                    result.gr11 = row2[0].c8
                    result.ar10 = row1[0].c9
                    result.gr10 = row2[0].c9
                    result.ar09 = row1[0].c0
                    result.gr09 = row2[0].c0
                    res.send(result);
                }
            })
        }
    })
})