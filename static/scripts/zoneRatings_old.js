// Day by day avy danger ratings
var zoneRating = [];
zoneRating[0] = [3,3,4,4,3,3,4,4,3,3,3,3,3,3,3,3,3,3,4,3];  // 2018_01_04
zoneRating[1] = [2,1,2,2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,2,2];  // 2018_01_11
zoneRating[2] = [3,3,3,3,2,2,3,3,3,3,3,3,3,3,3,2,2,2,3,3];  // 2018_01_12
zoneRating[3] = [3,3,3,3,1,2,3,3,3,3,3,3,3,3,3,2,2,2,3,3];  // 2018_01_13
zoneRating[4] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_15
zoneRating[5] = [3,3,3,3,0,1,3,2,2,2,2,2,2,2,3,2,2,2,3,2];  // 2018_01_17
zoneRating[6] = [2,2,2,2,0,1,2,2,1,1,2,2,2,2,2,2,2,2,2,2];  // 2018_01_18
zoneRating[7] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_19
zoneRating[8] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_21
zoneRating[9] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_22
zoneRating[10] = [1,1,1,1,0,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1];  // 2018_01_23
zoneRating[11] = [1,1,2,2,0,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_01_24
zoneRating[12] = [1,2,2,2,0,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1];  // 2018_01_25
zoneRating[13] = [1,2,2,2,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1];  // 2018_01_26
zoneRating[14] = [1,2,2,2,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1];  // 2018_01_27
zoneRating[15] = [2,2,2,2,0,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_01_28
zoneRating[16] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_29
zoneRating[17] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_30
zoneRating[18] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_01_31
zoneRating[19] = [2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];  // 2018_02_01
zoneRating[20] = [3,3,3,3,0,2,3,3,2,2,2,2,2,2,3,2,2,2,2,3];  // 2018_02_02
zoneRating[21] = [3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];  // 2018_02_04
zoneRating[22] = [3,3,4,4,0,3,4,4,3,3,3,3,3,3,4,3,3,3,4,4];  // 2018_02_05
zoneRating[23] = [3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,2,2,2,3,3];  // 2018_02_06
zoneRating[24] = [3,3,3,3,1,2,3,3,2,2,2,2,3,3,3,2,2,2,3,3];  // 2018_02_07
zoneRating[25] = [3,3,3,3,1,2,3,3,2,2,2,2,3,3,3,2,2,2,3,3];  // 2018_02_08
zoneRating[26] = [3,3,4,4,2,3,4,4,3,3,3,3,4,4,4,3,3,3,4,4];  // 2018_02_09
zoneRating[27] = [2,2,3,3,1,2,3,3,2,2,2,2,2,3,3,2,2,2,3,3];  // 2018_02_10
zoneRating[28] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_11
zoneRating[29] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_12
zoneRating[30] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_14
zoneRating[31] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_15
zoneRating[32] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_16
zoneRating[33] = [1,1,2,2,1,1,2,2,1,1,1,1,1,2,2,1,1,1,2,2];  // 2018_02_17
zoneRating[34] = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];  // 2018_02_18
zoneRating[35] = [2,2,3,3,1,2,3,3,2,2,2,2,2,3,3,2,1,1,3,3];  // 2018_02_19
zoneRating[36] = [1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1];  // 2018_02_21
zoneRating[37] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_22
zoneRating[38] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_23
zoneRating[39] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_24
zoneRating[40] = [3,3,3,3,0,2,3,3,2,2,3,3,3,3,3,3,2,2,3,3];  // 2018_02_25
zoneRating[41] = [3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,2,2,2,3,3];  // 2018_02_26
zoneRating[42] = [2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2];  // 2018_02_27
zoneRating[43] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_02_28
zoneRating[44] = [3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];  // 2018_03_02
zoneRating[45] = [1,1,1,1,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2];  // 2018_03_03
zoneRating[46] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_04
zoneRating[47] = [1,1,1,1,0,1,1,1,2,2,1,1,1,1,1,2,2,2,2,2];  // 2018_03_05
zoneRating[48] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_06
zoneRating[49] = [2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];  // 2018_03_07
zoneRating[50] = [3,3,3,4,1,3,4,3,3,3,3,3,3,3,3,3,3,3,4,3];  // 2018_03_08
zoneRating[51] = [3,3,3,3,1,2,3,3,2,2,3,3,3,3,3,2,2,2,3,3];  // 2018_03_10
zoneRating[52] = [3,3,3,4,1,2,4,3,3,3,3,3,3,3,3,2,2,2,4,3];  // 2018_03_11
zoneRating[53] = [3,2,3,3,1,2,3,3,3,2,3,3,2,3,3,3,2,2,3,3];  // 2018_03_12
zoneRating[54] = [3,3,3,4,1,3,4,4,3,3,3,3,3,3,4,3,3,3,4,4];  // 2018_03_13
zoneRating[55] = [3,3,3,4,2,3,4,4,3,3,3,3,3,3,4,3,3,3,4,3];  // 2018_03_14
zoneRating[56] = [3,3,3,3,1,2,3,3,3,3,3,3,3,3,3,3,2,2,3,3];  // 2018_03_15
zoneRating[57] = [2,2,3,3,1,2,3,3,2,2,2,2,2,2,2,1,1,1,3,2];  // 2018_03_16
zoneRating[58] = [1,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_17
zoneRating[59] = [1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_03_18
zoneRating[60] = [1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_03_20
zoneRating[61] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_21
zoneRating[62] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_23
zoneRating[63] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_24
zoneRating[64] = [1,1,1,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_03_25
zoneRating[65] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_26
zoneRating[66] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_29
zoneRating[67] = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];  // 2018_03_30
zoneRating[68] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_03_31
zoneRating[69] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_01
zoneRating[70] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_02
zoneRating[71] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_03
zoneRating[72] = [1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1];  // 2018_04_04
zoneRating[73] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_05
zoneRating[74] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_06
zoneRating[75] = [2,2,3,3,0,2,3,3,2,2,2,2,2,2,3,2,2,2,3,3];  // 2018_04_07
zoneRating[76] = [1,2,2,3,1,2,3,3,2,1,2,2,2,2,3,2,1,1,3,3];  // 2018_04_08
zoneRating[77] = [2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2];  // 2018_04_09
zoneRating[78] = [1,1,2,2,1,1,2,2,2,2,1,1,1,1,2,1,1,1,2,2];  // 2018_04_10
zoneRating[79] = [1,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_04_11
zoneRating[80] = [2,2,2,2,1,1,2,2,1,1,2,2,2,2,2,1,1,1,2,2];  // 2018_04_12
zoneRating[81] = [2,2,2,2,1,2,3,2,2,2,2,2,2,2,2,1,1,1,3,2];  // 2018_04_13
zoneRating[82] = [2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,1,1,2,2];  // 2018_04_14
zoneRating[83] = [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // 2018_04_15
zoneRating[84] = [2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2];  // 2018_04_16
zoneRating[85] = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2];  // 2018_04_17
zoneRating[86] = [2,2,2,2,0,1,2,2,1,1,2,2,2,2,2,1,1,1,2,2];  // 2018_04_18
zoneRating[87] = [1,1,2,2,0,1,2,2,1,1,1,1,1,1,2,1,1,1,2,2];  // 2018_04_19
zoneRating[88] = [2,2,3,3,0,2,3,3,2,2,2,2,2,2,3,2,2,2,3,3];  // 2018_04_20
zoneRating[89] = [3,3,3,4,2,3,4,3,3,3,3,3,3,3,3,3,2,2,4,3];  // 2018_04_21
zoneRating[90] = [2,2,3,3,1,2,3,3,2,2,2,2,2,2,2,2,1,1,2,2];  // 2018_04_22
zoneRating[91] = [2,1,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,1,2,2];  // 2018_04_23
zoneRating[92] = [2,1,2,2,0,2,2,2,2,1,2,1,2,2,2,2,1,1,2,2];  // 2018_04_24
zoneRating[93] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 2018_04_25
zoneRating[94] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 2018_04_26
zoneRating[95] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 2018_04_27
zoneRating[96] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 2018_04_28
zoneRating[97] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 2018_04_29