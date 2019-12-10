const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const con = require('./config/db');

app.get('/api/host', (req, res) => {
    res.send({host: 'LEH'});
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

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result.무단횡단 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result.보행노인 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result.보행어린이 = row1[i].사망자수;
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result.스쿨존어린이 = row1[i].사망자수;
                }else if (row1[i].사고유형구분 === '자전거') {
                    result.자전거 = row1[i].사망자수;
                }
            }

            res.send(result);
        }
    })
})