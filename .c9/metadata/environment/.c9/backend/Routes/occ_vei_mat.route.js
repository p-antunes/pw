{"filter":false,"title":"occ_vei_mat.route.js","tooltip":"/.c9/backend/Routes/occ_vei_mat.route.js","undoManager":{"mark":46,"position":46,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":72},"action":"insert","lines":["const occuroper = require ('express').Router();","const contoccuroper = require('../Controllers/occuroper.controller.js');"],"id":1}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":15},"action":"remove","lines":["oper"],"id":2},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["v"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["e"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["h"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["i"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["m"]},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["a"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":19},"action":"remove","lines":["contoccuroper"],"id":3},{"start":{"row":1,"column":6},"end":{"row":1,"column":18},"action":"insert","lines":["occurvehimat"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["c"],"id":4},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["o"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["n"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":50},"end":{"row":1,"column":58},"action":"remove","lines":["ccuroper"],"id":5},{"start":{"row":1,"column":50},"end":{"row":1,"column":62},"action":"insert","lines":["occurvehimat"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":1,"column":79},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["materials.get('/materials/', contmat.read);","materials.get('/materials/:id_material', contmat.readTypeMat);","materials.post('/materials/', contmat.save);","materials.put('/materials/:id_material', contmat.updateID);","materials.put('/materials/type/:id_material', contmat.updateMatType);","materials.put('/materials/avail/:id_material', contmat.updateAvail);","materials.put('/materials/admin/:id_material', contmat.updateIDAdmin);","materials.delete('/materials/:id_material', contmat.deleteID);",""],"id":8}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":9},"action":"remove","lines":["materials"],"id":9},{"start":{"row":3,"column":0},"end":{"row":3,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":9},"action":"remove","lines":["materials"],"id":10},{"start":{"row":4,"column":0},"end":{"row":4,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":9},"action":"remove","lines":["materials"],"id":11},{"start":{"row":5,"column":0},"end":{"row":5,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":9},"action":"remove","lines":["materials"],"id":12},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["v"],"id":13}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":13},"action":"insert","lines":["occurvehimats"],"id":14}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":9},"action":"remove","lines":["materials"],"id":15},{"start":{"row":7,"column":0},"end":{"row":7,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":9},"action":"remove","lines":["materials"],"id":16},{"start":{"row":8,"column":0},"end":{"row":8,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":9},"action":"remove","lines":["materials"],"id":17},{"start":{"row":9,"column":0},"end":{"row":9,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":9},"action":"remove","lines":["materials"],"id":18},{"start":{"row":10,"column":0},"end":{"row":10,"column":13},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":10,"column":23},"end":{"row":10,"column":32},"action":"remove","lines":["materials"],"id":19},{"start":{"row":10,"column":23},"end":{"row":10,"column":36},"action":"insert","lines":["occurvehimats"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":29},"action":"remove","lines":["materials"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":33},"action":"insert","lines":["occurvehimats"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":29},"action":"remove","lines":["materials"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":33},"action":"insert","lines":["occurvehimats"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":29},"action":"remove","lines":["aterials"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":34},"action":"insert","lines":["occurvehimats"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":29},"action":"remove","lines":["materials"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":33},"action":"insert","lines":["occurvehimats"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":30},"action":"remove","lines":["materials"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":34},"action":"insert","lines":["occurvehimats"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":28},"action":"remove","lines":["material"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":33},"action":"insert","lines":["occurvehimats"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":29},"action":"remove","lines":["materials"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":33},"action":"insert","lines":["occurvehimats"]}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"remove","lines":["s"],"id":20},{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"remove","lines":["s"]},{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"remove","lines":["s"]},{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["s"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["s"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["s"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"remove","lines":["s"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"remove","lines":["s"]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["m"],"id":21}],[{"start":{"row":10,"column":51},"end":{"row":10,"column":58},"action":"remove","lines":["contmat"],"id":22},{"start":{"row":10,"column":51},"end":{"row":10,"column":67},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":9,"column":54},"end":{"row":9,"column":61},"action":"remove","lines":["contmat"]},{"start":{"row":9,"column":54},"end":{"row":9,"column":70},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":8,"column":54},"end":{"row":8,"column":61},"action":"remove","lines":["contmat"]},{"start":{"row":8,"column":54},"end":{"row":8,"column":70},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":7,"column":53},"end":{"row":7,"column":60},"action":"remove","lines":["contmat"]},{"start":{"row":7,"column":53},"end":{"row":7,"column":69},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":6,"column":48},"end":{"row":6,"column":55},"action":"remove","lines":["contmat"]},{"start":{"row":6,"column":48},"end":{"row":6,"column":64},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":44},"action":"remove","lines":["contmat"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":53},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":4,"column":49},"end":{"row":4,"column":56},"action":"remove","lines":["contmat"]},{"start":{"row":4,"column":49},"end":{"row":4,"column":65},"action":"insert","lines":["contoccurvehimat"]},{"start":{"row":3,"column":36},"end":{"row":3,"column":43},"action":"remove","lines":["contmat"]},{"start":{"row":3,"column":36},"end":{"row":3,"column":52},"action":"insert","lines":["contoccurvehimat"]}],[{"start":{"row":4,"column":70},"end":{"row":4,"column":77},"action":"remove","lines":["TypeMat"],"id":23},{"start":{"row":4,"column":70},"end":{"row":4,"column":71},"action":"insert","lines":["I"]},{"start":{"row":4,"column":71},"end":{"row":4,"column":72},"action":"insert","lines":["D"]}],[{"start":{"row":7,"column":76},"end":{"row":7,"column":83},"action":"remove","lines":["MatType"],"id":24},{"start":{"row":7,"column":76},"end":{"row":7,"column":77},"action":"insert","lines":["I"]},{"start":{"row":7,"column":77},"end":{"row":7,"column":78},"action":"insert","lines":["D"]},{"start":{"row":7,"column":78},"end":{"row":7,"column":79},"action":"insert","lines":["M"]}],[{"start":{"row":7,"column":78},"end":{"row":7,"column":79},"action":"remove","lines":["M"],"id":25}],[{"start":{"row":7,"column":78},"end":{"row":7,"column":79},"action":"insert","lines":["v"],"id":26},{"start":{"row":7,"column":79},"end":{"row":7,"column":80},"action":"insert","lines":["e"]},{"start":{"row":7,"column":80},"end":{"row":7,"column":81},"action":"insert","lines":["i"]},{"start":{"row":7,"column":81},"end":{"row":7,"column":82},"action":"insert","lines":["m"]}],[{"start":{"row":7,"column":70},"end":{"row":7,"column":82},"action":"remove","lines":["updateIDveim"],"id":27},{"start":{"row":7,"column":70},"end":{"row":7,"column":84},"action":"insert","lines":["updateIDveimat"]}],[{"start":{"row":8,"column":77},"end":{"row":8,"column":82},"action":"remove","lines":["Avail"],"id":28},{"start":{"row":8,"column":77},"end":{"row":8,"column":78},"action":"insert","lines":["u"]},{"start":{"row":8,"column":78},"end":{"row":8,"column":79},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":78},"end":{"row":8,"column":79},"action":"remove","lines":["t"],"id":29},{"start":{"row":8,"column":77},"end":{"row":8,"column":78},"action":"remove","lines":["u"]}],[{"start":{"row":8,"column":77},"end":{"row":8,"column":78},"action":"insert","lines":["U"],"id":30}],[{"start":{"row":8,"column":71},"end":{"row":8,"column":78},"action":"remove","lines":["updateU"],"id":31},{"start":{"row":8,"column":71},"end":{"row":8,"column":88},"action":"insert","lines":["updateUtilization"]}],[{"start":{"row":9,"column":77},"end":{"row":9,"column":84},"action":"remove","lines":["IDAdmin"],"id":32},{"start":{"row":9,"column":77},"end":{"row":9,"column":78},"action":"insert","lines":["c"]}],[{"start":{"row":9,"column":77},"end":{"row":9,"column":78},"action":"remove","lines":["c"],"id":33}],[{"start":{"row":9,"column":77},"end":{"row":9,"column":78},"action":"insert","lines":["C"],"id":34}],[{"start":{"row":9,"column":71},"end":{"row":9,"column":78},"action":"remove","lines":["updateC"],"id":35},{"start":{"row":9,"column":71},"end":{"row":9,"column":91},"action":"insert","lines":["updateConfirmation()"]}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":46},"action":"remove","lines":["id_material"],"id":36},{"start":{"row":4,"column":35},"end":{"row":4,"column":48},"action":"insert","lines":["id_occurrence"]}],[{"start":{"row":6,"column":34},"end":{"row":6,"column":45},"action":"remove","lines":["id_material"],"id":37}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":48},"action":"remove","lines":["id_material"],"id":38},{"start":{"row":9,"column":40},"end":{"row":9,"column":51},"action":"remove","lines":["id_material"]},{"start":{"row":8,"column":40},"end":{"row":8,"column":51},"action":"remove","lines":["id_material"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":50},"action":"remove","lines":["id_material"]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":39}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":27},"action":"insert","lines":["module.exports = materials;"],"id":40}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":26},"action":"remove","lines":["materials"],"id":41},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["O"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["C"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["C"]}],[{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"remove","lines":["C"],"id":42},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"remove","lines":["C"]},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":["O"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["o"],"id":43},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["c"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["c"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["_"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["v"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["e"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["h"]}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["i"],"id":44}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":["i"],"id":45},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"remove","lines":["h"]}],[{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["i"],"id":46},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["_"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["m"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["a"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":28},"action":"remove","lines":["occ_vei_mat"],"id":47},{"start":{"row":12,"column":17},"end":{"row":12,"column":30},"action":"insert","lines":["occurvehimats"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":31},"end":{"row":12,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1610497196577,"hash":"531eae02ff0623642130903174b597be082844ee"}