const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const con = require('./config/db');

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.post('/line1', (req, res) => {
    var result = {
        발생건수_2012: 0, 발생건수_2013: 0, 발생건수_2014: 0, 발생건수_2015: 0, 발생건수_2016: 0, 발생건수_2017: 0, 발생건수_2018: 0,
        
        사상자수_2012: 0, 사상자수_2013: 0, 사상자수_2014: 0, 사상자수_2015: 0, 사상자수_2016: 0, 사상자수_2017: 0, 사상자수_2018: 0,
    };

    var sql1 = "SELECT 사고년도, SUM(발생건수) AS 발생건수 FROM accident2 GROUP BY 사고년도";

    con.query(sql1, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고년도 === 2012) {
                    result.발생건수_2012 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2013) {
                    result.발생건수_2013 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2014) {
                    result.발생건수_2014 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2015) {
                    result.발생건수_2015 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2016) {
                    result.발생건수_2016 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2017) {
                    result.발생건수_2017 = Number(row1[i].발생건수);
                } else if (row1[i].사고년도 === 2018) {
                    result.발생건수_2018 = Number(row1[i].발생건수);
                }
            }

            var sql2 = "SELECT 사고년도, SUM(사상자수) AS 사상자수 FROM accident2 GROUP BY 사고년도";

            con.query(sql2, function(err, row2) {
                if(err) {console.log(err)}
                else {
                    for(var i = 0; i < row2.length; i++) {
                        if (row2[i].사고년도 === 2012) {
                            result.사상자수_2012 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2013) {
                            result.사상자수_2013 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2014) {
                            result.사상자수_2014 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2015) {
                            result.사상자수_2015 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2016) {
                            result.사상자수_2016 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2017) {
                            result.사상자수_2017 = Number(row2[i].사상자수);
                        } else if (row2[i].사고년도 === 2018) {
                            result.사상자수_2018 = Number(row2[i].사상자수);
                        }
                    }
        
                    res.send(result);
                }
            })
            
        }
    });
});

app.post('/bar1', (req, res) => {
    var result = {
        부상자_2012: 0, 부상자_2013: 0, 부상자_2014: 0, 부상자_2015: 0, 부상자_2016: 0, 부상자_2017: 0, 부상자_2018: 0,
        
        경상자_2012: 0, 경상자_2013: 0, 경상자_2014: 0, 경상자_2015: 0, 경상자_2016: 0, 경상자_2017: 0, 경상자_2018: 0,

        중상자_2012: 0, 중상자_2013: 0, 중상자_2014: 0, 중상자_2015: 0, 중상자_2016: 0, 중상자_2017: 0, 중상자_2018: 0,

        사망자_2012: 0, 사망자_2013: 0, 사망자_2014: 0, 사망자_2015: 0, 사망자_2016: 0, 사망자_2017: 0, 사망자_2018: 0
    };

    var sql1 = "SELECT 사고년도, SUM(사망자수) AS 사망자수, SUM(중상자수) AS 중상자수, SUM(경상자수) AS 경상자수, SUM(부상자수) AS 부상자수 FROM accident2 GROUP BY 사고년도";

    con.query(sql1, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고년도 === 2012) {
                    result.사망자_2012 = Number(row1[i].사망자수);
                    result.중상자_2012 = Number(row1[i].중상자수);
                    result.경상자_2012 = Number(row1[i].경상자수);
                    result.부상자_2012 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2013) {
                    result.사망자_2013 = Number(row1[i].사망자수);
                    result.중상자_2013 = Number(row1[i].중상자수);
                    result.경상자_2013 = Number(row1[i].경상자수);
                    result.부상자_2013 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2014) {
                    result.사망자_2014 = Number(row1[i].사망자수);
                    result.중상자_2014 = Number(row1[i].중상자수);
                    result.경상자_2014 = Number(row1[i].경상자수);
                    result.부상자_2014 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2015) {
                    result.사망자_2015 = Number(row1[i].사망자수);
                    result.중상자_2015 = Number(row1[i].중상자수);
                    result.경상자_2015 = Number(row1[i].경상자수);
                    result.부상자_2015 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2016) {
                    result.사망자_2016 = Number(row1[i].사망자수);
                    result.중상자_2016 = Number(row1[i].중상자수);
                    result.경상자_2016 = Number(row1[i].경상자수);
                    result.부상자_2016 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2017) {
                    result.사망자_2017 = Number(row1[i].사망자수);
                    result.중상자_2017 = Number(row1[i].중상자수);
                    result.경상자_2017 = Number(row1[i].경상자수);
                    result.부상자_2017 = Number(row1[i].부상자수);
                } else if (row1[i].사고년도 === 2018) {
                    result.사망자_2018 = Number(row1[i].사망자수);
                    result.중상자_2018 = Number(row1[i].중상자수);
                    result.경상자_2018 = Number(row1[i].경상자수);
                    result.부상자_2018 = Number(row1[i].부상자수);
                }
            }

            res.send(result);
            
        }
    });
});

app.post('/bar2', (req, res) => {
    var result = {
        자전거: 0,
        보행노인: 0,
        무단횡단: 0,
        보행어린이: 0,
        스쿨존어린이: 0
    };

    var sql1 = "SELECT 사고유형구분, SUM(사상자수) AS 사상자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql1, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === "자전거") {
                    result.자전거 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === "보행노인") {
                    result.보행노인 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === "무단횡단") {
                    result.무단횡단 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === "보행어린이") {
                    result.보행어린이 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                    result.스쿨존어린이 = Number(row1[i].사상자수);
                } 
            }

            res.send(result);
        }
    });
});

app.post('/line2', (req, res) => {
    var result = {
        자전거_2012: 0, 자전거_2013: 0, 자전거_2014: 0, 자전거_2015: 0, 자전거_2016: 0, 자전거_2017: 0, 자전거_2018: 0,
        
        보행노인_2012: 0, 보행노인_2013: 0, 보행노인_2014: 0, 보행노인_2015: 0, 보행노인_2016: 0, 보행노인_2017: 0, 보행노인_2018: 0,
        
        무단횡단_2012: 0, 무단횡단_2013: 0, 무단횡단_2014: 0, 무단횡단_2015: 0, 무단횡단_2016: 0, 무단횡단_2017: 0, 무단횡단_2018: 0,
    
        보행어린이_2012: 0, 보행어린이_2013: 0, 보행어린이_2014: 0, 보행어린이_2015: 0, 보행어린이_2016: 0, 보행어린이_2017: 0, 보행어린이_2018: 0,

        스쿨존어린이_2012: 0, 스쿨존어린이_2013: 0, 스쿨존어린이_2014: 0, 스쿨존어린이_2015: 0, 스쿨존어린이_2016: 0, 스쿨존어린이_2017: 0, 스쿨존어린이_2018: 0
    };

    var sql1 = "SELECT 사고년도, 사고유형구분, SUM(사상자수) AS 사상자수 FROM accident2 GROUP BY 사고년도, 사고유형구분";

    con.query(sql1, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고년도 === 2012) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2012 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2012 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2012 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2012 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2012 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2013) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2013 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2013 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2013 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2013 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2013 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2014) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2014 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2014 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2014 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2014 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2014 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2015) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2015 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2015 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2015 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2015 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2015 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2016) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2016 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2016 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2016 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2016 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2016 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2017) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2017 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2017 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2017 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2017 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2017 = Number(row1[i].사상자수);
                    }
                } else if (row1[i].사고년도 === 2018) {
                    if (row1[i].사고유형구분 === "자전거") {
                        result.자전거_2018 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행노인") {
                        result.보행노인_2018 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "무단횡단") {
                        result.무단횡단_2018 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "보행어린이") {
                        result.보행어린이_2018 = Number(row1[i].사상자수);
                    } else if (row1[i].사고유형구분 === "스쿨존어린이") {
                        result.스쿨존어린이_2018 = Number(row1[i].사상자수);
                    }
                } 
            }

            res.send(result);
        }
    });
});

app.post('/pie1', (req, res) => {
    var result1 = {
        무단횡단: 0,
        보행노인: 0,
        보행어린이: 0,
        스쿨존어린이: 0,
        자전거: 0
    };

    var sql = "SELECT 사고유형구분, SUM(사상자수) AS 사상자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql, function (err, row1) {
        if (err) { console.log(err) }
        else {
            for (var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result1.무단횡단 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result1.보행노인 = Number(row1[i].사상자수);
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result1.보행어린이 = Number(row1[i].사상자수);
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result1.스쿨존어린이 = Number(row1[i].사상자수);
                }else if (row1[i].사고유형구분 === '자전거') {
                    result1.자전거 = Number(row1[i].사상자수);
                }
            }

            res.send(result1);
        }
    })
})

app.post('/pie2', (req, res) => {
    var result2 = {
        무단횡단: 0,
        보행노인: 0,
        보행어린이: 0,
        스쿨존어린이: 0,
        자전거: 0
    };

    var sql = "SELECT 사고유형구분, SUM(부상자수) AS 부상자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result2.무단횡단 = row1[i].부상자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result2.보행노인 = row1[i].부상자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result2.보행어린이 = row1[i].부상자수;
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result2.스쿨존어린이 = row1[i].부상자수;
                }else if (row1[i].사고유형구분 === '자전거') {
                    result2.자전거 = row1[i].부상자수;
                }
            }

            res.send(result2);
        }
    })
})

app.post('/pie3', (req, res) => {
    var result3 = {
        무단횡단: 0,
        보행노인: 0,
        보행어린이: 0,
        스쿨존어린이: 0,
        자전거: 0
    };

    var sql = "SELECT 사고유형구분, SUM(경상자수) AS 경상자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result3.무단횡단 = row1[i].경상자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result3.보행노인 = row1[i].경상자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result3.보행어린이 = row1[i].경상자수;
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result3.스쿨존어린이 = row1[i].경상자수;
                }else if (row1[i].사고유형구분 === '자전거') {
                    result3.자전거 = row1[i].경상자수;
                }
            }

            res.send(result3);
        }
    })
})

app.post('/pie4', (req, res) => {
    var result4 = {
        무단횡단: 0,
        보행노인: 0,
        보행어린이: 0,
        스쿨존어린이: 0,
        자전거: 0
    };

    var sql = "SELECT 사고유형구분, SUM(중상자수) AS 중상자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result4.무단횡단 = row1[i].중상자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result4.보행노인 = row1[i].중상자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result4.보행어린이 = row1[i].중상자수;
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result4.스쿨존어린이 = row1[i].중상자수;
                }else if (row1[i].사고유형구분 === '자전거') {
                    result4.자전거 = row1[i].중상자수;
                }
            }

            res.send(result4);
        }
    })
})

app.post('/pie5', (req, res) => {
    var result5 = {
        무단횡단: 0,
        보행노인: 0,
        보행어린이: 0,
        스쿨존어린이: 0,
        자전거: 0
    };

    var sql = "SELECT 사고유형구분, SUM(사망자수) AS 사망자수 FROM accident2 GROUP BY 사고유형구분";

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
                if (row1[i].사고유형구분 === '무단횡단') {
                    result5.무단횡단 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행노인') {
                    result5.보행노인 = row1[i].사망자수;
                } else if (row1[i].사고유형구분 === '보행어린이') {
                    result5.보행어린이 = row1[i].사망자수;
                }else if (row1[i].사고유형구분 === '스쿨존어린이') {
                    result5.스쿨존어린이 = row1[i].사망자수;
                }else if (row1[i].사고유형구분 === '자전거') {
                    result5.자전거 = row1[i].사망자수;
                }
            }

            res.send(result5);
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

app.post('/dcr18', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2018 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr17', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2017 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr16', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2016 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr15', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2015 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr14', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2014 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr13', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2013 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr12', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2012 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr11', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2011 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr10', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2010 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})

app.post('/dcr09', (req, res) => {

    var result = {
        d1:0,
        d2:0,
        d3:0
    }

    var sql = "select District, COUNT(*) as cnt from c2009 group by District order by cnt DESC limit 3;"

    con.query(sql, function (err, row) {
        if (err) { console.log(err) }
        else {
            result.d1 = row[0].District
            result.d2 = row[1].District
            result.d3 = row[2].District

            res.send(result);
        }
    })
})