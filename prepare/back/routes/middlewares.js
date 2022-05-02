exports.isLoggedIn = (req, res, next) =>{
    if(req.isAuthenticated()){// 로그인을 했는지 검사 passfort에서 지원
        next(); // 파라메터에 아무것도 없다면 다음 미들웨어로 ㄱ
    }else{
        res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){// 로그인을 했는지 검사 passfort에서 지원
        next(); // 파라메터에 아무것도 없다면 다음 미들웨어로 ㄱ
    }else{
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
}
//커스텀 미들웨어