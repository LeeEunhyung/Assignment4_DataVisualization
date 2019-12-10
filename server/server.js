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

    con.query(sql, function(err, row1) {
        if(err) {console.log(err)}
        else {
            for(var i = 0; i < row1.length; i++) {
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