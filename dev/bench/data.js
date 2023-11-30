window.BENCHMARK_DATA = {
  "lastUpdate": 1701354243331,
  "repoUrl": "https://github.com/helmholtz-analytics/heat",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "juanpedroghm@gmail.com",
            "name": "JuanPedroGHM",
            "username": "JuanPedroGHM"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02d2492d30515936f8c5345e049fd1e5fc005d61",
          "message": "Continous Benchmarking Action (#1137)\n\n* ci: continous benchmarking action\r\n\r\n* fix pytorch install command\r\n\r\n* fixed action python version\r\n\r\n* added github token to benchmark action\r\n\r\n* test message worst performance\r\n\r\n* ci: test gh-pages results from cb action\r\n\r\n* ci: this should pass\r\n\r\n* fix: typo\r\n\r\n* remove cache action in favor of gh-pages\r\n\r\n* extra /\r\n\r\n* ci: action config should work now\r\n\r\n* extra benchmarks from linalg module\r\n\r\n* quicker linalg benchmarks\r\n\r\n* cluster benchmarks, removed some code duplication\r\n\r\n* corrected cb workflow command\r\n\r\n* ci: split cb workflow into a main and pr. pr workflow triggers with a 'run bench' comment\r\n\r\n* ci: bench pr runs after a review is requested\r\n\r\n* ci: bench now only triggers on pull requests with 'PR talk' tag\r\n\r\n* ci: reshape benchmark, removed cronjob from pytorch workflows, renamed 'old' benchmarking folder to '2020'\r\n\r\n* mend\r\n\r\n* fix: missing import in cb main\r\n\r\n* ci: changed benchmark python version to 3.10, added shield in readme pointing to the benchmarks, changed trigger tag\r\n\r\n* fix: incorrect python version param\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-04-27T05:11:16+02:00",
          "tree_id": "1c96d21a920a2e553af9ed5fe701a7203ef9e8b5",
          "url": "https://github.com/helmholtz-analytics/heat/commit/02d2492d30515936f8c5345e049fd1e5fc005d61"
        },
        "date": 1682566048655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.0064384937286377,
            "unit": "s",
            "range": 0.06588414311408997
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.23874568939209,
            "unit": "s",
            "range": 4.7537031173706055
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.608992576599121,
            "unit": "s",
            "range": 1.0803240537643433
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.65354537963867,
            "unit": "s",
            "range": 2.2326583862304688
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.9593979120254517,
            "unit": "s",
            "range": 0.0668589398264885
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.9952268600463867,
            "unit": "s",
            "range": 0.05162478983402252
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.1640496253967285,
            "unit": "s",
            "range": 0.788973867893219
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 12.917398452758789,
            "unit": "s",
            "range": 0.052389681339263916
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.tarnawa@fz-juelich.de",
            "name": "Michael Tarnawa",
            "username": "mtar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ca840102ee6ba51eb3db9c393dab973562f9cf1",
          "message": "Outsource CI workflow (main) (#1144)\n\n* change ci to public target repository\r\n\r\n* add more pytorch versions in matrix\r\n\r\n* delete gitlab file\r\n\r\n* Use gitlab's badge\r\n\r\n* sparse tests increase min pytorch to 1.12\r\n\r\n* update ref",
          "timestamp": "2023-05-08T09:47:07+02:00",
          "tree_id": "b47ac8cf8376639ad244c6cfa73a2d4439bf5fe9",
          "url": "https://github.com/helmholtz-analytics/heat/commit/7ca840102ee6ba51eb3db9c393dab973562f9cf1"
        },
        "date": 1683533022745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3607841730117798,
            "unit": "s",
            "range": 0.09720459580421448
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.596490859985352,
            "unit": "s",
            "range": 4.744739055633545
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.109837532043457,
            "unit": "s",
            "range": 0.9763903021812439
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.129493713378906,
            "unit": "s",
            "range": 2.6870570182800293
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 1.2492748498916626,
            "unit": "s",
            "range": 0.11195642501115799
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.1880028247833252,
            "unit": "s",
            "range": 0.11158335208892822
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 9.023608207702637,
            "unit": "s",
            "range": 0.6376816034317017
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 12.526630401611328,
            "unit": "s",
            "range": 0.2068168818950653
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abbc161454a10d02025b58365904f6be623409a",
          "message": "Features/560 reshape speedup (#1125)\n\n* reshape speed up first draft\r\n\r\n* lazy solution for non-zero split\r\n\r\n* remove dead code\r\n\r\n* remove test change\r\n\r\n* double precision for lshape_map, target_map\r\n\r\n* expand docs\r\n\r\n* prevent torch.prod() RuntimeError on older GPUs when input is int or long",
          "timestamp": "2023-05-22T04:50:40+02:00",
          "tree_id": "16f5a79210d34e878e1459356c5cb8c17122ea67",
          "url": "https://github.com/helmholtz-analytics/heat/commit/8abbc161454a10d02025b58365904f6be623409a"
        },
        "date": 1684724646853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 0.9409732818603516,
            "unit": "s",
            "range": 0.10981494933366776
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 4.830145835876465,
            "unit": "s",
            "range": 3.8494036197662354
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.587499141693115,
            "unit": "s",
            "range": 1.0906234979629517
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 41.0870246887207,
            "unit": "s",
            "range": 2.2554943561553955
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7591880559921265,
            "unit": "s",
            "range": 0.06596166640520096
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.7841414213180542,
            "unit": "s",
            "range": 0.08697084337472916
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.583443641662598,
            "unit": "s",
            "range": 0.5895178318023682
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1486433744430542,
            "unit": "s",
            "range": 0.035412367433309555
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6205a5eca137afaa5c19a1e7ccd2ee8a331329b0",
          "message": "Introduce `DNDarray.__array__()` method (#1154)\n\n* implement __array__ method\r\n\r\n* test __array__ method\r\n\r\n* test __array__ method\r\n\r\n* copy to CPU if necessary\r\n\r\n* update .numpy() docs\r\n\r\n* update .numpy() docs\r\n\r\n* update docs\r\n\r\n* update .numpy() docs\r\n\r\n* fix np dtype comparison\r\n\r\n* fix np dtype comparison\r\n\r\n* fix GPU array comparison",
          "timestamp": "2023-05-22T09:46:41+02:00",
          "tree_id": "76642d29fe5bbe4afafb9855c84eb0bd28add9de",
          "url": "https://github.com/helmholtz-analytics/heat/commit/6205a5eca137afaa5c19a1e7ccd2ee8a331329b0"
        },
        "date": 1684742390899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 0.8627721667289734,
            "unit": "s",
            "range": 0.05123291537165642
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 4.71013879776001,
            "unit": "s",
            "range": 3.7869374752044678
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.644545555114746,
            "unit": "s",
            "range": 0.9805055856704712
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.26018142700195,
            "unit": "s",
            "range": 1.976609230041504
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8286346197128296,
            "unit": "s",
            "range": 0.06730403751134872
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.7945326566696167,
            "unit": "s",
            "range": 0.05571514740586281
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.884799957275391,
            "unit": "s",
            "range": 0.5157168507575989
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1258480548858643,
            "unit": "s",
            "range": 0.05847302824258804
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.tarnawa@fz-juelich.de",
            "name": "Michael Tarnawa",
            "username": "mtar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f400d14b7324c2f7180eb8ae7c2070de066135eb",
          "message": "Merge pull request #1152 from helmholtz-analytics/support/694-amd-hip\n\nsupport amd HIP testing",
          "timestamp": "2023-05-22T11:21:10+02:00",
          "tree_id": "3660c17358ac7b03d42d170fd2c00b414f79b302",
          "url": "https://github.com/helmholtz-analytics/heat/commit/f400d14b7324c2f7180eb8ae7c2070de066135eb"
        },
        "date": 1684748047091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 0.8988556861877441,
            "unit": "s",
            "range": 0.0637301653623581
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.219430446624756,
            "unit": "s",
            "range": 4.604112148284912
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.559315204620361,
            "unit": "s",
            "range": 0.9846170544624329
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 38.10189437866211,
            "unit": "s",
            "range": 2.76328444480896
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.810444176197052,
            "unit": "s",
            "range": 0.06511379033327103
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8347999453544617,
            "unit": "s",
            "range": 0.026931846514344215
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.731255531311035,
            "unit": "s",
            "range": 0.7050207257270813
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.0273901224136353,
            "unit": "s",
            "range": 0.03521817550063133
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.tarnawa@fz-juelich.de",
            "name": "Michael Tarnawa",
            "username": "mtar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f99cce1453e161ef400cbe1119ac6fef80dfd1fa",
          "message": "Drop support for PyTorch 1.7, Python 3.6 (#1147)\n\n* increase min pytorch & delete old code\r\n\r\n* delete code for python < 3.7\r\n\r\n* remove pytorch 1.7 from test matrix\r\n\r\n* call bitwise functions instead of tensor builtins\r\n\r\n* replace python 3.7 with 3.10 in tests\r\n\r\n* increase min python + numpy\r\n\r\n* update deprecated functions\r\n\r\n* Place 3.10 in quotes so it doesn't get interpreted as 3.1\r\n\r\n* Update ci.yaml\r\n\r\nexclude python 3.10 and pytorch 1.8/1.9\r\n\r\n* Update ci.yaml\r\n\r\nExclude Python 3.10 & PyTorch 1.10\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-05-23T10:34:33+02:00",
          "tree_id": "daef152187a22241c34bfac8e8373136ae55535b",
          "url": "https://github.com/helmholtz-analytics/heat/commit/f99cce1453e161ef400cbe1119ac6fef80dfd1fa"
        },
        "date": 1684831714798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.0331406593322754,
            "unit": "s",
            "range": 0.06368827074766159
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.409095764160156,
            "unit": "s",
            "range": 4.7657294273376465
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.845440864562988,
            "unit": "s",
            "range": 1.0106961727142334
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.47422409057617,
            "unit": "s",
            "range": 2.9162349700927734
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.951638400554657,
            "unit": "s",
            "range": 0.06195865571498871
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.0053038597106934,
            "unit": "s",
            "range": 0.05874303728342056
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.7009596824646,
            "unit": "s",
            "range": 0.5610595941543579
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.3282134532928467,
            "unit": "s",
            "range": 0.032579205930233
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "468999e108a72485b3688f54c8d7fe2f984f8045",
          "message": "Support PyTorch 2.0.1 on branch `main` (#1155)\n\n* Support latest PyTorch release\r\n\r\n* Update setup.py\r\n\r\n* Specify allclose tolerance in test_inv()\r\n\r\n* Increase allclose tolerance in test_inv\r\n\r\n* Increase allclose tolerance for distributed floating-point operations\r\n\r\n* fix working branches selection\r\n\r\n* add pr workflow (#1127)\r\n\r\n* add pr workflow\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Update README.md\r\n\r\n* Update .gitlab-ci.yml\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\n\r\n* Support latest PyTorch release\r\n\r\n* expand version check to torch 2\r\n\r\n* dndarray.item() to return ValueError if dndarray.size > 1\r\n\r\n* increase min pytorch & delete old code\r\n\r\n* delete code for python < 3.7\r\n\r\n* remove pytorch 1.7 from test matrix\r\n\r\n* call bitwise functions instead of tensor builtins\r\n\r\n* Fixed bugs due to behaviour change in torch.nn.Module.zero_grad() and torch.Tensor.item() in torch 2.0 (#1149)\r\n\r\n* Support latest PyTorch release\r\n\r\n* Fixed bug in optimizer due to change in default behaviour of zero_grad() function in torch 2.0\r\n\r\n* Fixed bug in due to change in behaviour of torch.Tensor.item() in torch 2.0\r\n\r\n* Fixed version in setup.py\r\n\r\n* Modified tests to work for torch 1.0 also\r\n\r\n---------\r\n\r\nCo-authored-by: ClaudiaComito <ClaudiaComito@users.noreply.github.com>\r\n\r\n* update test_item\r\n\r\n* replace python 3.7 with 3.10 in tests\r\n\r\n* increase min python + numpy\r\n\r\n* Add Interoperability chapter\r\n\r\n* update deprecated functions\r\n\r\n* switch ref\r\n\r\n* bump pytorch version\r\n\r\n* define branch name for Pytorch release PR\r\n\r\n* Add torch 2.0.0 to matrix\r\n\r\n* Test latest torch patch, fix 1.8 entries\r\n\r\n---------\r\n\r\nCo-authored-by: ClaudiaComito <ClaudiaComito@users.noreply.github.com>\r\nCo-authored-by: Michael Tarnawa <m.tarnawa@fz-juelich.de>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Ashwath V A <73862377+Mystic-Slice@users.noreply.github.com>",
          "timestamp": "2023-05-23T19:26:43+02:00",
          "tree_id": "4298fe3897568cd95d835ffc2d9cc53b298fb3fe",
          "url": "https://github.com/helmholtz-analytics/heat/commit/468999e108a72485b3688f54c8d7fe2f984f8045"
        },
        "date": 1684863622471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3457703590393066,
            "unit": "s",
            "range": 0.0818895697593689
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.620911598205566,
            "unit": "s",
            "range": 4.693271636962891
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.0497331619262695,
            "unit": "s",
            "range": 0.9303812980651855
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.066925048828125,
            "unit": "s",
            "range": 2.2695720195770264
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8463083505630493,
            "unit": "s",
            "range": 0.05460250750184059
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8126780390739441,
            "unit": "s",
            "range": 0.048105787485837936
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.060009002685547,
            "unit": "s",
            "range": 0.18940185010433197
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1943029165267944,
            "unit": "s",
            "range": 0.060206275433301926
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fd3af5e6ba8c12b89a3bb80ee1c05ae49a4de5b",
          "message": "Merge pull request #1075 from AsRaNi1/Communicator-not-properly-initialized-when-creating-new-DNDarrays-in-some-routines/1074-my-bug-fix\n\nFixed initialization of DNDarrays communicator in some routines",
          "timestamp": "2023-05-25T11:28:04+02:00",
          "tree_id": "0fefe822e3ad13c426a22230d176be12246185ab",
          "url": "https://github.com/helmholtz-analytics/heat/commit/5fd3af5e6ba8c12b89a3bb80ee1c05ae49a4de5b"
        },
        "date": 1685007717392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.4233367443084717,
            "unit": "s",
            "range": 0.10170768201351166
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.2173333168029785,
            "unit": "s",
            "range": 3.9342546463012695
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.108536720275879,
            "unit": "s",
            "range": 1.0454715490341187
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.01653289794922,
            "unit": "s",
            "range": 2.342420816421509
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8153241276741028,
            "unit": "s",
            "range": 0.038919467478990555
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8794156908988953,
            "unit": "s",
            "range": 0.08604833483695984
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.73513650894165,
            "unit": "s",
            "range": 0.6942393183708191
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.2570745944976807,
            "unit": "s",
            "range": 0.04073786735534668
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bc1ccaa27bb030f2b04931ce2dc6dbae055942e",
          "message": "Merge pull request #1126 from helmholtz-analytics/features/1041-hsvd-new\n\nadded implementation of hSVD (`heat.linalg.hsvd`, hierarchical SVD) allowing for truncation both by rank (`heat.linalg.hsvd_rank`) and accuracy (`heat.linalg.hsvd_rtol`)",
          "timestamp": "2023-06-06T13:04:10+02:00",
          "tree_id": "26c9d8b1f7b3677f137fce88515bea192f96d961",
          "url": "https://github.com/helmholtz-analytics/heat/commit/1bc1ccaa27bb030f2b04931ce2dc6dbae055942e"
        },
        "date": 1686050263087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.20815221965312958,
            "unit": "s",
            "range": 0.01585559733211994
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.27276965975761414,
            "unit": "s",
            "range": 0.05782872438430786
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3340585231781006,
            "unit": "s",
            "range": 0.0755491629242897
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.560429096221924,
            "unit": "s",
            "range": 4.55959415435791
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.081908226013184,
            "unit": "s",
            "range": 1.1351022720336914
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.4936408996582,
            "unit": "s",
            "range": 1.4693344831466675
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7979428172111511,
            "unit": "s",
            "range": 0.040488023310899734
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8364278674125671,
            "unit": "s",
            "range": 0.052982114255428314
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.182063102722168,
            "unit": "s",
            "range": 0.7953183650970459
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1357619762420654,
            "unit": "s",
            "range": 0.06439079344272614
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90166e49912051f7e75475c76a72e52dfcf2dd80",
          "message": "Merge pull request #1020 from helmholtz-analytics/feature/778-broadcasting\n\nImplement `broadcast_arrays`, `broadcast_to`",
          "timestamp": "2023-06-15T14:47:27+02:00",
          "tree_id": "4a052b5653f767e32985ee0a37d36f682be3c12c",
          "url": "https://github.com/helmholtz-analytics/heat/commit/90166e49912051f7e75475c76a72e52dfcf2dd80"
        },
        "date": 1686834185225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.27992305159568787,
            "unit": "s",
            "range": 0.023444192484021187
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3306518793106079,
            "unit": "s",
            "range": 0.049682874232530594
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.9918584823608398,
            "unit": "s",
            "range": 0.12343338131904602
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.967545509338379,
            "unit": "s",
            "range": 4.010085105895996
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.619624137878418,
            "unit": "s",
            "range": 0.9951204657554626
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.32096862792969,
            "unit": "s",
            "range": 3.0978775024414062
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 1.2608810663223267,
            "unit": "s",
            "range": 0.08409810066223145
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.3107084035873413,
            "unit": "s",
            "range": 0.08187070488929749
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 9.585488319396973,
            "unit": "s",
            "range": 0.7710549235343933
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.401508092880249,
            "unit": "s",
            "range": 0.06584632396697998
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a840ccc25ef06fb97056b5ca3a57cb7cf17d062",
          "message": "Merge pull request #1119 from helmholtz-analytics/features/#1117-array-copy-None\n\n`ht.array()` default to `copy=None` (e.g., only if necessary)",
          "timestamp": "2023-06-19T14:55:48+02:00",
          "tree_id": "c817366808f53be844d30abed6a3f6e2634c700a",
          "url": "https://github.com/helmholtz-analytics/heat/commit/3a840ccc25ef06fb97056b5ca3a57cb7cf17d062"
        },
        "date": 1687180181267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22918958961963654,
            "unit": "s",
            "range": 0.025974951684474945
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2832033038139343,
            "unit": "s",
            "range": 0.053751759231090546
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.1935369968414307,
            "unit": "s",
            "range": 0.06838201731443405
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.231768608093262,
            "unit": "s",
            "range": 4.600335597991943
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.160141944885254,
            "unit": "s",
            "range": 1.168915033340454
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 41.266937255859375,
            "unit": "s",
            "range": 2.0074045658111572
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8308317065238953,
            "unit": "s",
            "range": 0.04742327332496643
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.842497706413269,
            "unit": "s",
            "range": 0.057537686079740524
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.376896858215332,
            "unit": "s",
            "range": 0.6989758610725403
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.0855686664581299,
            "unit": "s",
            "range": 0.04543221369385719
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sai.suraj.27.729@gmail.com",
            "name": "Sai-Suraj-27",
            "username": "Sai-Suraj-27"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ea256b0085808aa5db50320b11114d08a9373e8",
          "message": "Refactoring for efficiency and readability (#1150)\n\n* Reformatted some code in a few files to make it more cleaner.\r\n\r\n* Used f-strings whereever they can be used but not used, also merged some nested if conditions.\r\n\r\n* Used f-strings whereever they can be used but not used, also merged some nested if conditions.\r\n\r\n* updated conf.py file by using f-strings at required places.\r\n\r\n* Reformatted some code in 4 more files, to make it better.\r\n\r\n* Updated more files by using f-strings wherever required.\r\n\r\n* Updated some more files to make them more cleaner.\r\n\r\n* Reformatted some code in 5 more files, to make it better.\r\n\r\n* Made the code a little cleaner in 3 more files.\r\n\r\n* Reformatted some code in 6 more files, to make it better.\r\n\r\n* Updated 5 more files to make them a little more cleaner and better.\r\n\r\n* Reformatted some code in 6 more files, to make them better.\r\n\r\n* Updated 5 more files to make them a little more cleaner and better.\r\n\r\n* Updated a few more files to make their code much cleaner and better.\r\n\r\n* Fixed errors in pre-commit checks.\r\n\r\n* Updated the code in 2 files as per the suggested changes.\r\n\r\n* Made changes to resolve the errors in tests.\r\n\r\n* corrected a small error in test_knn.py file.\r\n\r\n* Reverted the small changes made in test_knn.py\r\n\r\n* Made the suggested changes to test_knn.py file.\r\n\r\n* Update test_knn.py\r\n\r\n* Undoing the changes made in test_knn.py file.\r\n\r\n* Changed the dtype from ht.int32 to ht.int64 in test_knn.py file.\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-06-20T13:50:33+02:00",
          "tree_id": "c8cfd580478e896907f7167b8bf91de098a6a307",
          "url": "https://github.com/helmholtz-analytics/heat/commit/9ea256b0085808aa5db50320b11114d08a9373e8"
        },
        "date": 1687262705181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.219100683927536,
            "unit": "s",
            "range": 0.01044752448797226
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3291913866996765,
            "unit": "s",
            "range": 0.05191640555858612
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.5395084619522095,
            "unit": "s",
            "range": 0.0899520292878151
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.364592552185059,
            "unit": "s",
            "range": 4.4310102462768555
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.169771671295166,
            "unit": "s",
            "range": 1.1930651664733887
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.88731384277344,
            "unit": "s",
            "range": 2.326538562774658
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.9160690307617188,
            "unit": "s",
            "range": 0.056772567331790924
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.9194231033325195,
            "unit": "s",
            "range": 0.06780950725078583
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.410874843597412,
            "unit": "s",
            "range": 0.4855055809020996
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.2732521295547485,
            "unit": "s",
            "range": 0.04698130860924721
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "b.hagemeier@fz-juelich.de",
            "name": "Björn Hagemeier",
            "username": "bhagemeier"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "966a7a840872b0f7e201c240bc45e2384921e2ce",
          "message": "Dockerfile and accompanying documentation (#970)\n\n* Dockerfile and accompanying documentation\r\n\r\nThe Dockerfile provides some flexibility in selecting which version of HeAT should be inside\r\nthe Docker image. Also, one can choose whether to install from source or from PyPI.\r\n\r\n* README.md describing containerization\r\n\r\n* Fix indentation in README.md\r\n\r\nSome code sections had a mix of spaces and tabs, which have now been\r\nconvertd into tabs.\r\n\r\n* Docker support\r\n\r\nUse pytorch 1.11\r\nFix problem with CUDA package repo keys\r\n\r\n* Ensure mpi4py installation from source\r\n\r\n* Migrate to NVidia PyTorch base image\r\n\r\nNVidia images come with support for HPC systems desirable for our uses.\r\nThey work a little differently internally and required some changes.\r\n\r\nThe tzdata configuration configures the CET/CEST timezone, which seems\r\nto be required when installing additional packages.\r\n\r\nThere is an issue with pip caches in the image, which led to the final\r\ncache purge to fail in the PyPI release based build. This is fixed\r\nthrough a final invocation of true.\r\n\r\n* Provide sample file for Singularity\r\n\r\n* feat: singularity definition file and slurm multi-node example in the docker readme\r\n\r\n* docs: quick_start.md has a docker section with link to docker readme\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* ci: docker cleanup\r\n\r\n* ci: build docker action, updated docs\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n* README suggestions\r\n\r\n* docs: removed system specific flag from example slurm file\r\n\r\n---------\r\n\r\nCo-authored-by: Gutiérrez Hermosillo Muriedas, Juan Pedro <juanpedroghm@gmail.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-06-20T15:02:15+02:00",
          "tree_id": "b5d148d6866ec7989df95ce86a2d42b0f190e16d",
          "url": "https://github.com/helmholtz-analytics/heat/commit/966a7a840872b0f7e201c240bc45e2384921e2ce"
        },
        "date": 1687266951204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22041860222816467,
            "unit": "s",
            "range": 0.024018704891204834
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2794017493724823,
            "unit": "s",
            "range": 0.03424530103802681
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.2342188358306885,
            "unit": "s",
            "range": 0.051946934312582016
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.46388578414917,
            "unit": "s",
            "range": 4.5065388679504395
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.0080976486206055,
            "unit": "s",
            "range": 1.0073717832565308
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.77582931518555,
            "unit": "s",
            "range": 2.422520637512207
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7612134218215942,
            "unit": "s",
            "range": 0.0695384070277214
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.7703195214271545,
            "unit": "s",
            "range": 0.04877445101737976
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.442999362945557,
            "unit": "s",
            "range": 0.668419599533081
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.0710986852645874,
            "unit": "s",
            "range": 0.07150645554065704
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f98ccc6eaa298a77a65fd7847d8f1f04691e4fc2",
          "message": "update version after release of v1.3.0 (#1167)",
          "timestamp": "2023-06-20T18:59:56+02:00",
          "tree_id": "c8795b5046495f76052214b82419fc5fc7df6d0b",
          "url": "https://github.com/helmholtz-analytics/heat/commit/f98ccc6eaa298a77a65fd7847d8f1f04691e4fc2"
        },
        "date": 1687281227116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22124862670898438,
            "unit": "s",
            "range": 0.030435005202889442
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.27973777055740356,
            "unit": "s",
            "range": 0.04762342944741249
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.358171820640564,
            "unit": "s",
            "range": 0.0987866148352623
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.0979509353637695,
            "unit": "s",
            "range": 3.916285514831543
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.819827079772949,
            "unit": "s",
            "range": 1.0077662467956543
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.493404388427734,
            "unit": "s",
            "range": 2.39079213142395
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7739747166633606,
            "unit": "s",
            "range": 0.03930717706680298
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8921969532966614,
            "unit": "s",
            "range": 0.05291367322206497
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.896584510803223,
            "unit": "s",
            "range": 0.6321520209312439
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1826903820037842,
            "unit": "s",
            "range": 0.033491428941488266
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e15a2d3c1cadedf9b0ad04d3625f739929e9e64a",
          "message": "Merge pull request #1166 from helmholtz-analytics/docs/release_md\n\nDocumentation: Release HowTo",
          "timestamp": "2023-06-26T11:59:45+02:00",
          "tree_id": "094c8bee1c1824e4ebaba27565a191842415dc03",
          "url": "https://github.com/helmholtz-analytics/heat/commit/e15a2d3c1cadedf9b0ad04d3625f739929e9e64a"
        },
        "date": 1687774554352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.3064005672931671,
            "unit": "s",
            "range": 0.023807071149349213
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.37893012166023254,
            "unit": "s",
            "range": 0.07647167146205902
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 2.102416753768921,
            "unit": "s",
            "range": 0.11848271638154984
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 6.573990821838379,
            "unit": "s",
            "range": 4.802183151245117
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.885861396789551,
            "unit": "s",
            "range": 1.0264192819595337
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 40.816734313964844,
            "unit": "s",
            "range": 1.3686072826385498
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 1.2656538486480713,
            "unit": "s",
            "range": 0.08347979933023453
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.2928130626678467,
            "unit": "s",
            "range": 0.09839753806591034
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 10.350786209106445,
            "unit": "s",
            "range": 0.18308517336845398
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.3596116304397583,
            "unit": "s",
            "range": 0.06540459394454956
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "405d9b985c131f80afe33b1d2b2bd8125f97cf62",
          "message": "Merge pull request #1173 from helmholtz-analytics/fix/changelog-updater\n\nChangelog updater action fix",
          "timestamp": "2023-07-03T13:46:58+02:00",
          "tree_id": "403ee60b1197c55de786761d54762bbe63dba349",
          "url": "https://github.com/helmholtz-analytics/heat/commit/405d9b985c131f80afe33b1d2b2bd8125f97cf62"
        },
        "date": 1688385686491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.23451419174671173,
            "unit": "s",
            "range": 0.023987354710698128
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.29232892394065857,
            "unit": "s",
            "range": 0.0527816116809845
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3277208805084229,
            "unit": "s",
            "range": 0.0941959023475647
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.213129043579102,
            "unit": "s",
            "range": 4.287837982177734
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.16896915435791,
            "unit": "s",
            "range": 1.0000478029251099
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 42.04335403442383,
            "unit": "s",
            "range": 0.4768431782722473
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8573762774467468,
            "unit": "s",
            "range": 0.056673262268304825
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8971904516220093,
            "unit": "s",
            "range": 0.06855850666761398
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.060193061828613,
            "unit": "s",
            "range": 0.21249920129776
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.2614878416061401,
            "unit": "s",
            "range": 0.04088260605931282
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.tarnawa@fz-juelich.de",
            "name": "Michael Tarnawa",
            "username": "mtar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b2ed0ff726e034ee2f77148d9c77bfe19c128dc",
          "message": "Merge pull request #1180 from helmholtz-analytics/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2023-07-14T10:49:32+02:00",
          "tree_id": "c5bc964335117fcf0cc799cbb72fc22d216363a6",
          "url": "https://github.com/helmholtz-analytics/heat/commit/2b2ed0ff726e034ee2f77148d9c77bfe19c128dc"
        },
        "date": 1689325456461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.2634623646736145,
            "unit": "s",
            "range": 0.023072421550750732
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3210631012916565,
            "unit": "s",
            "range": 0.05724715441465378
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.5168782472610474,
            "unit": "s",
            "range": 0.09760332852602005
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.728908538818359,
            "unit": "s",
            "range": 4.325509548187256
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.005774021148682,
            "unit": "s",
            "range": 1.0516462326049805
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.976829528808594,
            "unit": "s",
            "range": 1.9820195436477661
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.9788303375244141,
            "unit": "s",
            "range": 0.04834107309579849
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.9679139852523804,
            "unit": "s",
            "range": 0.04410133883357048
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.1697869300842285,
            "unit": "s",
            "range": 0.682013988494873
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.2115697860717773,
            "unit": "s",
            "range": 0.048984088003635406
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112093564+mrfh92@users.noreply.github.com",
            "name": "Fabian Hoppe",
            "username": "mrfh92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "009a91aba5d68b7dc52121949b3e505f965fa765",
          "message": "Merge pull request #1170 from helmholtz-analytics/bug/1121-print-fails-on-gpu\n\n`ht.print` can now print arrays distributed over `n>1` GPUs",
          "timestamp": "2023-07-24T10:22:43+02:00",
          "tree_id": "83fc134312ed9b857f6c8a755ebedab2fb9e0087",
          "url": "https://github.com/helmholtz-analytics/heat/commit/009a91aba5d68b7dc52121949b3e505f965fa765"
        },
        "date": 1690187794006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.24136164784431458,
            "unit": "s",
            "range": 0.014989631250500679
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3060407042503357,
            "unit": "s",
            "range": 0.04474097862839699
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3213037252426147,
            "unit": "s",
            "range": 0.07807199656963348
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.438258171081543,
            "unit": "s",
            "range": 4.532651901245117
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 4.776575088500977,
            "unit": "s",
            "range": 1.0958740711212158
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.36615753173828,
            "unit": "s",
            "range": 2.6294941902160645
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8351085782051086,
            "unit": "s",
            "range": 0.04033607244491577
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.9164949655532837,
            "unit": "s",
            "range": 0.07127095013856888
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.665530204772949,
            "unit": "s",
            "range": 0.8261171579360962
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.1730554103851318,
            "unit": "s",
            "range": 0.048380810767412186
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90ac056447197b82a94e644aab179f0ef1f1c1a6",
          "message": "Automate branch creation on issue assignment (#1181)\n\n* automate branch creation on issue assignment\r\n\r\n* add enhancement label to feature request issues",
          "timestamp": "2023-07-24T15:00:07+02:00",
          "tree_id": "827f9dc84cdce34e9d611d3d58a71e77606d513b",
          "url": "https://github.com/helmholtz-analytics/heat/commit/90ac056447197b82a94e644aab179f0ef1f1c1a6"
        },
        "date": 1690204502587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.28999075293540955,
            "unit": "s",
            "range": 0.030202291905879974
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3314424455165863,
            "unit": "s",
            "range": 0.05256454274058342
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.4538590908050537,
            "unit": "s",
            "range": 0.09711333364248276
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.473354816436768,
            "unit": "s",
            "range": 3.811626672744751
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.401356220245361,
            "unit": "s",
            "range": 1.0672577619552612
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 41.215797424316406,
            "unit": "s",
            "range": 1.128321886062622
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.877597451210022,
            "unit": "s",
            "range": 0.05254720523953438
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.9881324768066406,
            "unit": "s",
            "range": 0.04088718816637993
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 7.017214298248291,
            "unit": "s",
            "range": 0.7237522602081299
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.2957892417907715,
            "unit": "s",
            "range": 0.036403100937604904
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1524a761015ae169f94794d5719e171e8dccf7b3",
          "message": "Merge latest 1.3.x updates into `main` (#1188)\n\n* update version to 1.3.0\r\n\r\n* Create .readthedocs.yaml (#1187)\r\n\r\n* Update heat/core/version.py\r\n\r\n---------\r\n\r\nCo-authored-by: Michael Tarnawa <m.tarnawa@fz-juelich.de>",
          "timestamp": "2023-08-04T11:08:35+02:00",
          "tree_id": "2113f1a6014b646b469f02f2a21004ec1eb5ab5d",
          "url": "https://github.com/helmholtz-analytics/heat/commit/1524a761015ae169f94794d5719e171e8dccf7b3"
        },
        "date": 1691141052930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.26202335953712463,
            "unit": "s",
            "range": 0.024828922003507614
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.3398238718509674,
            "unit": "s",
            "range": 0.04830550774931908
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 2.0454630851745605,
            "unit": "s",
            "range": 0.10846072435379028
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 6.077889442443848,
            "unit": "s",
            "range": 3.951051950454712
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.871243476867676,
            "unit": "s",
            "range": 1.0575283765792847
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 41.26012420654297,
            "unit": "s",
            "range": 1.60458505153656
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 1.152302861213684,
            "unit": "s",
            "range": 0.04583846777677536
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.1569578647613525,
            "unit": "s",
            "range": 0.06399905681610107
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 9.02987289428711,
            "unit": "s",
            "range": 0.5764942765235901
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.3018343448638916,
            "unit": "s",
            "range": 0.061232734471559525
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39374113+ClaudiaComito@users.noreply.github.com",
            "name": "Claudia Comito",
            "username": "ClaudiaComito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "549deb9c7e7732696c5b7a96bbd8f01c5bd03f53",
          "message": "Small fixes to automated branch creation on Issue assignment (#1190)\n\n* small changes to branch creation action, update docs\r\n\r\n* update quick_start\r\n\r\n* Update quick_start.md",
          "timestamp": "2023-08-04T14:51:17+02:00",
          "tree_id": "981b44c24ca3e79a3ea00c361f9c8773a64f9e6d",
          "url": "https://github.com/helmholtz-analytics/heat/commit/549deb9c7e7732696c5b7a96bbd8f01c5bd03f53"
        },
        "date": 1691154436762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.27335071563720703,
            "unit": "s",
            "range": 0.034357961267232895
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.33771198987960815,
            "unit": "s",
            "range": 0.046306051313877106
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.9356781244277954,
            "unit": "s",
            "range": 0.12699483335018158
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 6.227564811706543,
            "unit": "s",
            "range": 4.617743968963623
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.638108730316162,
            "unit": "s",
            "range": 1.0548932552337646
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 39.32331085205078,
            "unit": "s",
            "range": 2.513068437576294
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 1.2127825021743774,
            "unit": "s",
            "range": 0.08655709028244019
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 1.3259118795394897,
            "unit": "s",
            "range": 0.08576948195695877
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 9.925756454467773,
            "unit": "s",
            "range": 0.29191234707832336
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.3343473672866821,
            "unit": "s",
            "range": 0.0658719390630722
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanpedroghm@gmail.com",
            "name": "JuanPedroGHM",
            "username": "JuanPedroGHM"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7482f14dca5574d054b3eba47070c33e49f6ad74",
          "message": "FAIR-RS and best practice badges (#1143)\n\n* ci: fair software workflow\r\n\r\n* Update README.md: added FAIR badge as required by FAIR action\r\n\r\n* Update README.md: added zenodo/doi badge\r\n\r\n* Update README.md: corrected zenodo/doi badge to all-version-doi\r\n\r\n* Update README.md: added pypi badge\r\n\r\n* Update README.md: correction\r\n\r\n* Trigger workflow\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Add OpenSSF Best Practices badge\r\n\r\n* docs: rearrange badges by color, removed fair-software action\r\n\r\n* reorganize / relabel badges\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Update README.md\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Test - Update README.md\r\n\r\n* Update README.md\r\n\r\n---------\r\n\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-07T10:16:57+02:00",
          "tree_id": "595ced4f79fad949f12a565566f52ea727a96b70",
          "url": "https://github.com/helmholtz-analytics/heat/commit/7482f14dca5574d054b3eba47070c33e49f6ad74"
        },
        "date": 1691397089780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.21091003715991974,
            "unit": "s",
            "range": 0.014791554771363735
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.292398065328598,
            "unit": "s",
            "range": 0.04492587968707085
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.3392932415008545,
            "unit": "s",
            "range": 0.09163504093885422
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 5.540284156799316,
            "unit": "s",
            "range": 4.387272357940674
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 5.125346660614014,
            "unit": "s",
            "range": 0.9564374685287476
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 41.636573791503906,
            "unit": "s",
            "range": 0.7615768909454346
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.8575516939163208,
            "unit": "s",
            "range": 0.07045251131057739
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.8904763460159302,
            "unit": "s",
            "range": 0.05301974341273308
          },
          {
            "name": "qr_split_01_N4_CPU - RUNTIME",
            "value": 6.388546466827393,
            "unit": "s",
            "range": 0.8297274112701416
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 1.164061188697815,
            "unit": "s",
            "range": 0.06034034118056297
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abdul Samad Siddiqui",
            "username": "samadpls",
            "email": "abdulsamadsid1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ba32e21e35cea5c358a11c4125a9f395fcc87fee",
          "message": "Implement `to_sparse()` method for DNDarray conversion to DCSR_matrix (#1206)\n\n* Implemented `to_sparse()` method for DNDarray class conversion to DCSR_matrix representation\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added `to_sparse` in heat/sparse/manipulations.py\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added for `to_sparse` method\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* removed comment\r\n\r\n* updated testcase of `to_sparse`\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* updated `to_sparse` method and test case\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Updated the `todense` method to `to_dense`\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-09-18T15:41:38Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/ba32e21e35cea5c358a11c4125a9f395fcc87fee"
        },
        "date": 1695061210788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 54.71043014526367,
            "unit": "s",
            "range": 11.475862503051758
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.657191787320312,
            "unit": "kJ",
            "range": 1.461198985442853
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.003910933621227741,
            "unit": "s",
            "range": 0.010307220742106438
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 57.234453830658936,
            "unit": "W",
            "range": 7.170973812883382
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 64.85218691739588,
            "unit": "%",
            "range": 10.820350038482214
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 23.240501499176027,
            "unit": "%",
            "range": 25.38449333243275
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00030682608485221863,
            "unit": "s",
            "range": 0.00009590132685843855
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 57.1877993780427,
            "unit": "W",
            "range": 7.0338160897787585
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 64.3101242625594,
            "unit": "%",
            "range": 11.024419317086444
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 23.2497145652771,
            "unit": "%",
            "range": 25.379120994391712
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.43145403265953064,
            "unit": "s",
            "range": 0.12630599737167358
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 56.883765256939895,
            "unit": "W",
            "range": 6.240057844906999
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 60.40641895043566,
            "unit": "%",
            "range": 12.393361712388407
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 23.316209316253662,
            "unit": "%",
            "range": 25.341206657657786
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.39341962337493896,
            "unit": "s",
            "range": 0.10198221355676651
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 56.40486210182051,
            "unit": "W",
            "range": 5.054335809164441
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 53.86511748416289,
            "unit": "%",
            "range": 15.878604525046596
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 23.411893558502197,
            "unit": "%",
            "range": 25.289310572531146
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7607436180114746,
            "unit": "s",
            "range": 0.2596266269683838
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 56.08505449294216,
            "unit": "W",
            "range": 3.99273759640158
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 50.02803881255871,
            "unit": "%",
            "range": 18.677442985741674
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 23.42926025390625,
            "unit": "%",
            "range": 25.280229490121634
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09880927950143814,
            "unit": "s",
            "range": 0.029307741671800613
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 56.00516091470645,
            "unit": "W",
            "range": 3.4529581507739375
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 49.577965596180285,
            "unit": "%",
            "range": 19.253951307104018
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 23.429584121704103,
            "unit": "%",
            "range": 25.28006112783634
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.17148229479789734,
            "unit": "s",
            "range": 0.04275234788656235
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 56.04492287120735,
            "unit": "W",
            "range": 3.2144861569707004
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 49.69602286102173,
            "unit": "%",
            "range": 19.23323167868713
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 23.42977695465088,
            "unit": "%",
            "range": 25.279960901064296
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.592199325561523,
            "unit": "s",
            "range": 1.8948616981506348
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 99.71591692414653,
            "unit": "W",
            "range": 9.03606982118179
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 50.98196783491269,
            "unit": "%",
            "range": 18.16128179907022
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 23.511600685119628,
            "unit": "%",
            "range": 25.19734086398459
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 20.76929473876953,
            "unit": "s",
            "range": 3.4454426765441895
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 100.54395933048289,
            "unit": "W",
            "range": 7.571087873902628
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 47.78072894024875,
            "unit": "%",
            "range": 16.692631343089833
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 23.543073654174805,
            "unit": "%",
            "range": 25.24054186681957
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 22.940574645996094,
            "unit": "s",
            "range": 6.851184368133545
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 99.846030011377,
            "unit": "W",
            "range": 8.589105115976112
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 46.65680722665907,
            "unit": "%",
            "range": 17.10585955240965
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 21.54621343612671,
            "unit": "%",
            "range": 21.857382590383782
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005241393810138106,
            "unit": "s",
            "range": 0.00020541498088277876
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 66.69323187876572,
            "unit": "W",
            "range": 5.143763437808746
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 47.60529801301992,
            "unit": "%",
            "range": 16.225618834758098
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 23.20434503555298,
            "unit": "%",
            "range": 25.40545164519388
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.001865386962890625,
            "unit": "s",
            "range": 0.0007046397076919675
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 66.7922160512455,
            "unit": "W",
            "range": 5.143354542553551
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 47.59613667616065,
            "unit": "%",
            "range": 16.23079958230375
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 23.205159378051757,
            "unit": "%",
            "range": 25.405181570797055
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 18.48904037475586,
            "unit": "s",
            "range": 1.4508240222930908
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.931828287100976,
            "unit": "kJ",
            "range": 0.3574017166139596
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7019883394241333,
            "unit": "s",
            "range": 0.10119219124317169
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 30.060594199891682,
            "unit": "W",
            "range": 20.93693072823485
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 97.13432622669663,
            "unit": "%",
            "range": 0.5274541877536626
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 4.89044189453125,
            "unit": "%",
            "range": 1.6563371599403582
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.6995142102241516,
            "unit": "s",
            "range": 0.13847310841083527
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 30.17897136816374,
            "unit": "W",
            "range": 21.085202922994142
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 97.1518138996189,
            "unit": "%",
            "range": 0.7813571918076159
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 4.89044189453125,
            "unit": "%",
            "range": 1.6563371599403582
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.4768409729003906,
            "unit": "s",
            "range": 0.3260354697704315
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 80.81578495097497,
            "unit": "W",
            "range": 17.04901873474495
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 96.90982591250463,
            "unit": "%",
            "range": 1.0722373223642208
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 5.037067264318466,
            "unit": "%",
            "range": 1.3073253213550864
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.2145614624023438,
            "unit": "s",
            "range": 0.3068188428878784
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 84.0908898493755,
            "unit": "W",
            "range": 22.56126607543422
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 96.99470566618632,
            "unit": "%",
            "range": 1.2083298284952761
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 5.174127769470215,
            "unit": "%",
            "range": 1.302150938141108
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.2840831279754639,
            "unit": "s",
            "range": 0.17169275879859924
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 57.396504206313054,
            "unit": "W",
            "range": 27.729228486878398
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 96.98874356745719,
            "unit": "%",
            "range": 1.0646583457035117
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 5.07232666015625,
            "unit": "%",
            "range": 1.6816792766103308
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.23114462196826935,
            "unit": "s",
            "range": 0.04563005641102791
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 36.81581965669728,
            "unit": "W",
            "range": 18.63671162082194
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 96.97656748063926,
            "unit": "%",
            "range": 1.1433128122438865
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 5.07232666015625,
            "unit": "%",
            "range": 1.6816792766103308
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2722078561782837,
            "unit": "s",
            "range": 0.049168143421411514
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 36.26996587949584,
            "unit": "W",
            "range": 18.909633819833576
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 97.05218851937434,
            "unit": "%",
            "range": 1.0818455830474538
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 5.07232666015625,
            "unit": "%",
            "range": 1.6816792766103308
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.7023112773895264,
            "unit": "s",
            "range": 0.1437886506319046
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 63.50597037756207,
            "unit": "W",
            "range": 32.29619715878747
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 96.97738077192679,
            "unit": "%",
            "range": 0.8422842850047717
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 5.085903978347778,
            "unit": "%",
            "range": 1.6908491078151044
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.1626739501953125,
            "unit": "s",
            "range": 0.2502463161945343
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 70.53155490740322,
            "unit": "W",
            "range": 22.262869295415104
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 96.99289542903793,
            "unit": "%",
            "range": 1.0429797127938734
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 5.136292374134063,
            "unit": "%",
            "range": 1.7318570615103162
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.997444748878479,
            "unit": "s",
            "range": 0.15550798177719116
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 66.12241001263683,
            "unit": "W",
            "range": 26.009890983875916
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 97.1178940445758,
            "unit": "%",
            "range": 0.8930285064772991
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 5.184482836723328,
            "unit": "%",
            "range": 1.7824180877209461
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7350853681564331,
            "unit": "s",
            "range": 0.046704091131687164
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 34.17005385874796,
            "unit": "W",
            "range": 20.4758913721985
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 96.89440085076832,
            "unit": "%",
            "range": 0.7983750688521047
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 5.19683837890625,
            "unit": "%",
            "range": 1.797026337594576
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7041054964065552,
            "unit": "s",
            "range": 0.07449857145547867
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 45.06281707521747,
            "unit": "W",
            "range": 26.558343240630737
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 96.34261269323169,
            "unit": "%",
            "range": 1.7528627511787767
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 5.19683837890625,
            "unit": "%",
            "range": 1.797026337594576
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abdul Samad Siddiqui",
            "username": "samadpls",
            "email": "abdulsamadsid1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ba32e21e35cea5c358a11c4125a9f395fcc87fee",
          "message": "Implement `to_sparse()` method for DNDarray conversion to DCSR_matrix (#1206)\n\n* Implemented `to_sparse()` method for DNDarray class conversion to DCSR_matrix representation\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added `to_sparse` in heat/sparse/manipulations.py\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added for `to_sparse` method\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* removed comment\r\n\r\n* updated testcase of `to_sparse`\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* updated `to_sparse` method and test case\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Updated the `todense` method to `to_dense`\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-09-18T15:41:38Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/ba32e21e35cea5c358a11c4125a9f395fcc87fee"
        },
        "date": 1695062576631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 59.69823455810547,
            "unit": "s",
            "range": 15.331486701965332
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 6.241065937773438,
            "unit": "kJ",
            "range": 1.6312500771596055
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0031237986404448748,
            "unit": "s",
            "range": 0.00800480879843235
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 55.2111372072636,
            "unit": "W",
            "range": 4.34461011875589
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 48.67094619260912,
            "unit": "%",
            "range": 1.6119278841434947
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 24.45414810180664,
            "unit": "%",
            "range": 24.071585402396966
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003100503236055374,
            "unit": "s",
            "range": 0.00007620583346579224
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 55.39044476981519,
            "unit": "W",
            "range": 4.414555405728455
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 48.77921324289251,
            "unit": "%",
            "range": 1.702927460500752
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 24.464479827880858,
            "unit": "%",
            "range": 24.07615984858132
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.4983418583869934,
            "unit": "s",
            "range": 0.2266666740179062
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 57.19442458975385,
            "unit": "W",
            "range": 5.939843233447779
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 49.58148887367112,
            "unit": "%",
            "range": 4.053320017411083
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 24.578219985961915,
            "unit": "%",
            "range": 24.129093770553887
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.48739710450172424,
            "unit": "s",
            "range": 0.22840580344200134
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 58.6136977806441,
            "unit": "W",
            "range": 6.908505506950354
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 51.759064417788935,
            "unit": "%",
            "range": 8.088525987704472
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 24.631195068359375,
            "unit": "%",
            "range": 24.15535378736739
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.8479291200637817,
            "unit": "s",
            "range": 0.2943582534790039
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 58.09249185260846,
            "unit": "W",
            "range": 5.739692162802088
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 53.39828313617359,
            "unit": "%",
            "range": 11.353520526688198
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 24.631195068359375,
            "unit": "%",
            "range": 24.15535378736739
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10327472537755966,
            "unit": "s",
            "range": 0.03640708699822426
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 58.50793566084555,
            "unit": "W",
            "range": 7.659988059176985
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 53.732824215505524,
            "unit": "%",
            "range": 12.873338942531475
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 24.631210708618163,
            "unit": "%",
            "range": 24.155361690505835
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.18937084078788757,
            "unit": "s",
            "range": 0.03811651095747948
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 58.22457577839894,
            "unit": "W",
            "range": 6.653556623899675
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 53.2337861836847,
            "unit": "%",
            "range": 12.708122049383318
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 24.63135986328125,
            "unit": "%",
            "range": 24.15543706390947
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.470705032348633,
            "unit": "s",
            "range": 2.304272413253784
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 98.30856427674956,
            "unit": "W",
            "range": 9.2310162919553
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 51.780512339005284,
            "unit": "%",
            "range": 13.1199932162943
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 24.561867237091064,
            "unit": "%",
            "range": 24.263124349712033
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 23.08001708984375,
            "unit": "s",
            "range": 7.165721893310547
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 101.66237149301656,
            "unit": "W",
            "range": 7.7163394456358985
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 49.615828469487454,
            "unit": "%",
            "range": 11.571616823390189
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 21.87959976196289,
            "unit": "%",
            "range": 22.572452734848856
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 24.32750129699707,
            "unit": "s",
            "range": 7.378664493560791
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 103.92407625705957,
            "unit": "W",
            "range": 8.984703187122287
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 54.60465694990504,
            "unit": "%",
            "range": 14.347066422230219
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 25.399933052062988,
            "unit": "%",
            "range": 23.862381146778166
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.00048065185546875,
            "unit": "s",
            "range": 0.00018628069665282965
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 66.47844843522859,
            "unit": "W",
            "range": 4.765265227425529
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 52.72451815062912,
            "unit": "%",
            "range": 17.05758422559628
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 28.67687225341797,
            "unit": "%",
            "range": 28.809653346555102
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0019294738303869963,
            "unit": "s",
            "range": 0.0008731987909413874
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 66.55699149929885,
            "unit": "W",
            "range": 4.757026535514324
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 52.7249261392519,
            "unit": "%",
            "range": 17.06123274038441
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 28.67878007888794,
            "unit": "%",
            "range": 28.808524353790006
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 18.128376007080078,
            "unit": "s",
            "range": 1.413793921470642
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.7995661830914063,
            "unit": "kJ",
            "range": 0.19804026575663092
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6256526708602905,
            "unit": "s",
            "range": 0.07142762094736099
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 48.785960127452874,
            "unit": "W",
            "range": 5.332805909889873
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 59.01791548425334,
            "unit": "%",
            "range": 9.048809888062454
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 3.5170959293842317,
            "unit": "%",
            "range": 0.5829342811623265
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.537792444229126,
            "unit": "s",
            "range": 0.047536153346300125
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 48.859842873805775,
            "unit": "W",
            "range": 5.265617239231247
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 63.11189882773347,
            "unit": "%",
            "range": 13.74644772652
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 3.5506019473075865,
            "unit": "%",
            "range": 0.6025847036299482
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.153442859649658,
            "unit": "s",
            "range": 0.26641395688056946
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 84.17563568465475,
            "unit": "W",
            "range": 4.744364543261209
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 62.32423938465049,
            "unit": "%",
            "range": 13.425434667246256
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 3.5522321224212647,
            "unit": "%",
            "range": 0.7386599530925063
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.150428295135498,
            "unit": "s",
            "range": 0.2635411024093628
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 82.27374083963994,
            "unit": "W",
            "range": 11.367913704762016
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 61.92006668340027,
            "unit": "%",
            "range": 11.288893709825814
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 3.46436585187912,
            "unit": "%",
            "range": 0.9785401769232376
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.367933750152588,
            "unit": "s",
            "range": 0.4469675123691559
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 61.243289713574995,
            "unit": "W",
            "range": 19.558260369961932
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 62.045913769713,
            "unit": "%",
            "range": 8.223872346459768
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 3.3607835292816164,
            "unit": "%",
            "range": 1.0117738279714124
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.21000508964061737,
            "unit": "s",
            "range": 0.035516273230314255
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 46.511918525603726,
            "unit": "W",
            "range": 11.642097886282782
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 62.43130146265092,
            "unit": "%",
            "range": 11.461568365731779
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 3.32377353310585,
            "unit": "%",
            "range": 1.0174054006037963
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2189672291278839,
            "unit": "s",
            "range": 0.0507146455347538
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 46.17824627422769,
            "unit": "W",
            "range": 12.604349922552679
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 62.48116477033061,
            "unit": "%",
            "range": 12.539928965545768
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 3.3228431046009064,
            "unit": "%",
            "range": 1.0178839557767823
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.978151559829712,
            "unit": "s",
            "range": 0.2906028926372528
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 67.77175148982414,
            "unit": "W",
            "range": 20.291054854641953
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 62.799614598059485,
            "unit": "%",
            "range": 11.585053667634046
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 3.346914863586426,
            "unit": "%",
            "range": 1.0157436235415276
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.1712939739227295,
            "unit": "s",
            "range": 0.5137801766395569
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 70.41121639652788,
            "unit": "W",
            "range": 13.182674913550493
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 63.541066511504596,
            "unit": "%",
            "range": 12.957058689740625
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 3.4009456813335417,
            "unit": "%",
            "range": 1.040512257233945
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.909646987915039,
            "unit": "s",
            "range": 0.38621556758880615
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 76.53245166726603,
            "unit": "W",
            "range": 21.410376257543355
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 65.58474331105712,
            "unit": "%",
            "range": 16.93855786002926
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 4.957687616348267,
            "unit": "%",
            "range": 4.8408860541146
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7445775866508484,
            "unit": "s",
            "range": 0.1402420550584793
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 50.43356415157923,
            "unit": "W",
            "range": 4.862415941089486
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 65.36576546855173,
            "unit": "%",
            "range": 14.12322565389997
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 6.469639283418656,
            "unit": "%",
            "range": 9.001491003366823
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.8419097661972046,
            "unit": "s",
            "range": 0.21008077263832092
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 53.919723468281816,
            "unit": "W",
            "range": 10.797210238027304
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 64.09882308563905,
            "unit": "%",
            "range": 12.07656190021263
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 6.548939615488052,
            "unit": "%",
            "range": 8.974715018266213
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abdul Samad Siddiqui",
            "username": "samadpls",
            "email": "abdulsamadsid1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ba32e21e35cea5c358a11c4125a9f395fcc87fee",
          "message": "Implement `to_sparse()` method for DNDarray conversion to DCSR_matrix (#1206)\n\n* Implemented `to_sparse()` method for DNDarray class conversion to DCSR_matrix representation\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added `to_sparse` in heat/sparse/manipulations.py\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* added for `to_sparse` method\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* removed comment\r\n\r\n* updated testcase of `to_sparse`\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* updated `to_sparse` method and test case\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* Updated the `todense` method to `to_dense`\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: samadpls <abdulsamadsid1@gmail.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-09-18T15:41:38Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/ba32e21e35cea5c358a11c4125a9f395fcc87fee"
        },
        "date": 1695311484666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 48.723541259765625,
            "unit": "s",
            "range": 3.56638240814209
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 4.54576955179375,
            "unit": "kJ",
            "range": 0.24823885637210344
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.002965368330478668,
            "unit": "s",
            "range": 0.0069899181835353374
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 45.386964757093416,
            "unit": "W",
            "range": 7.344680853355894
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 44.109082552245084,
            "unit": "%",
            "range": 0.6866004456240025
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 7.909654724597931,
            "unit": "%",
            "range": 2.182476091037054
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00038596391095779836,
            "unit": "s",
            "range": 0.00015771028120070696
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 45.613630435072096,
            "unit": "W",
            "range": 6.853414107617037
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 44.1322396974998,
            "unit": "%",
            "range": 0.7443681498845156
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 7.917329490184784,
            "unit": "%",
            "range": 2.154081164564621
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.34009990096092224,
            "unit": "s",
            "range": 0.07294216006994247
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 46.77709590185073,
            "unit": "W",
            "range": 4.501383753512067
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 44.19114817937302,
            "unit": "%",
            "range": 1.6192989711880903
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 7.95026044845581,
            "unit": "%",
            "range": 2.0140746192495356
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.33036574721336365,
            "unit": "s",
            "range": 0.07074509561061859
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 49.209933147925426,
            "unit": "W",
            "range": 1.950923663786184
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 44.41085321388985,
            "unit": "%",
            "range": 3.876843297235677
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 8.035554504394531,
            "unit": "%",
            "range": 1.707659685501281
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6201338768005371,
            "unit": "s",
            "range": 0.15231482684612274
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 50.05566658307765,
            "unit": "W",
            "range": 2.2077495756888568
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 44.728782257675824,
            "unit": "%",
            "range": 6.245812565777519
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 8.051160144805909,
            "unit": "%",
            "range": 1.606249894374883
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.0912630707025528,
            "unit": "s",
            "range": 0.02884185127913952
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 49.39704776133887,
            "unit": "W",
            "range": 2.00179741756441
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 44.84418910753379,
            "unit": "%",
            "range": 7.125258690075768
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 8.044711089134216,
            "unit": "%",
            "range": 1.6028827833096335
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.14667680859565735,
            "unit": "s",
            "range": 0.030560001730918884
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 49.42721948446303,
            "unit": "W",
            "range": 2.157399192605302
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 44.81085485831651,
            "unit": "%",
            "range": 7.248165705869683
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 8.043806314468384,
            "unit": "%",
            "range": 1.6021170016786186
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 7.82305908203125,
            "unit": "s",
            "range": 1.0188162326812744
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 89.93934648200948,
            "unit": "W",
            "range": 4.651845762145068
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 43.206834227170305,
            "unit": "%",
            "range": 5.8252059381361745
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 7.99903290271759,
            "unit": "%",
            "range": 1.5601186004579748
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 19.023006439208984,
            "unit": "s",
            "range": 1.8236854076385498
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 91.59222047949616,
            "unit": "W",
            "range": 2.446746131507208
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 44.671950274532264,
            "unit": "%",
            "range": 5.030511338605211
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 8.072515869140625,
            "unit": "%",
            "range": 1.5895754127895534
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 19.768274307250977,
            "unit": "s",
            "range": 1.5539631843566895
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 90.51619829676608,
            "unit": "W",
            "range": 2.160491297453752
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 43.88663120679458,
            "unit": "%",
            "range": 4.274663138696822
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 8.270869994163514,
            "unit": "%",
            "range": 1.6222972112820455
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004875183221884072,
            "unit": "s",
            "range": 0.0001999993110075593
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 58.817168666048964,
            "unit": "W",
            "range": 3.584710595983174
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 45.14270970218337,
            "unit": "%",
            "range": 7.493804088840927
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 8.69036145210266,
            "unit": "%",
            "range": 0.6818284926691671
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0018276214832440019,
            "unit": "s",
            "range": 0.0007221624837256968
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 58.89474846391289,
            "unit": "W",
            "range": 3.587865781955533
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 45.14118352965486,
            "unit": "%",
            "range": 7.4963856414146255
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 8.69380578994751,
            "unit": "%",
            "range": 0.6783586640173771
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 23.54559326171875,
            "unit": "s",
            "range": 3.524371862411499
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.3700408662248047,
            "unit": "kJ",
            "range": 0.168573578872834
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.7488749623298645,
            "unit": "s",
            "range": 0.20637628436088562
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 11.740832030737177,
            "unit": "W",
            "range": 10.080968280851753
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 77.36875597787548,
            "unit": "%",
            "range": 6.620418843915888
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.7507434487342834,
            "unit": "s",
            "range": 0.23809711635112762
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 10.343256017021238,
            "unit": "W",
            "range": 9.027969603912076
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 74.99320659246052,
            "unit": "%",
            "range": 9.952155064753551
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 4.167557716369629,
            "unit": "s",
            "range": 0.985819399356842
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 47.33867938977615,
            "unit": "W",
            "range": 4.823563446959582
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 73.63816512683445,
            "unit": "%",
            "range": 9.589116274137623
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.9527676105499268,
            "unit": "s",
            "range": 0.615345299243927
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 41.77206932959007,
            "unit": "W",
            "range": 5.166125759971525
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 73.95822614200958,
            "unit": "%",
            "range": 8.881172420680425
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.7358452081680298,
            "unit": "s",
            "range": 0.24294890463352203
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 25.46423167363877,
            "unit": "W",
            "range": 12.131512162573404
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 74.40993690044817,
            "unit": "%",
            "range": 8.869536664543764
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.23207037150859833,
            "unit": "s",
            "range": 0.03904750943183899
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 7.399255819553825,
            "unit": "W",
            "range": 0.14945703216279413
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 74.42710148699902,
            "unit": "%",
            "range": 8.894009317106217
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.27470317482948303,
            "unit": "s",
            "range": 0.03593892604112625
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 7.394127602994051,
            "unit": "W",
            "range": 0.15545520530030787
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 74.50863575841542,
            "unit": "%",
            "range": 8.916957025389392
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 2.6261539459228516,
            "unit": "s",
            "range": 0.1911013275384903
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 34.97328912902122,
            "unit": "W",
            "range": 9.294320053573289
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 73.43969771355258,
            "unit": "%",
            "range": 9.487498623794925
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.696291446685791,
            "unit": "s",
            "range": 0.36521947383880615
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 38.160875599547836,
            "unit": "W",
            "range": 8.504131178949317
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 73.2038280549415,
            "unit": "%",
            "range": 10.14531740837955
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.854750156402588,
            "unit": "s",
            "range": 0.6489273905754089
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 38.85079137119827,
            "unit": "W",
            "range": 13.233584434205907
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 73.09011542019375,
            "unit": "%",
            "range": 9.822189008817647
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 0.7073125213384628,
            "unit": "%",
            "range": 0.011647036671638489
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.8948338627815247,
            "unit": "s",
            "range": 0.2226608246564865
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 13.87136948307544,
            "unit": "W",
            "range": 12.597901122002298
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 72.64818001220827,
            "unit": "%",
            "range": 10.130456939219796
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 0.7517957359552383,
            "unit": "%",
            "range": 0.14509668052196503
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 1.0283732414245605,
            "unit": "s",
            "range": 0.2070590704679489
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 33.440257419671475,
            "unit": "W",
            "range": 16.56492281485241
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 73.66604300993778,
            "unit": "%",
            "range": 9.302388290196156
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 0.7162292927503586,
            "unit": "%",
            "range": 0.038397350907325746
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Claudia Comito",
            "username": "ClaudiaComito",
            "email": "39374113+ClaudiaComito@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ece385a61714713bf1f51553019eac3ea64d85d8",
          "message": "add SECURITY.md and vulnerability report template (#1221)",
          "timestamp": "2023-09-26T16:00:40Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/ece385a61714713bf1f51553019eac3ea64d85d8"
        },
        "date": 1696508303354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 56.8642578125,
            "unit": "s",
            "range": 6.704440593719482
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.109793289992188,
            "unit": "kJ",
            "range": 0.8197911708591947
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0026460334192961454,
            "unit": "s",
            "range": 0.006360592320561409
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 45.76083094424498,
            "unit": "W",
            "range": 6.692159139071216
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 28.252526838246474,
            "unit": "%",
            "range": 2.8841794673902132
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 12.270692992210389,
            "unit": "%",
            "range": 10.07175292360627
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0002795342297758907,
            "unit": "s",
            "range": 0.00010195645882049575
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 46.02612569096517,
            "unit": "W",
            "range": 6.1707290059658035
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 28.36609011746439,
            "unit": "%",
            "range": 2.9381365154561205
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 12.277820229530334,
            "unit": "%",
            "range": 10.056639841166337
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3277803957462311,
            "unit": "s",
            "range": 0.08786257356405258
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 48.081154516841345,
            "unit": "W",
            "range": 2.8994502672083966
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 29.004810855408806,
            "unit": "%",
            "range": 3.2999701399194663
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 12.342391467094421,
            "unit": "%",
            "range": 9.94245797585625
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.27536240220069885,
            "unit": "s",
            "range": 0.07182753831148148
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 50.88762477741142,
            "unit": "W",
            "range": 6.601916312990035
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 30.068108957413482,
            "unit": "%",
            "range": 4.203294795483068
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 12.422252750396728,
            "unit": "%",
            "range": 9.788724743433503
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6537602543830872,
            "unit": "s",
            "range": 0.1355219930410385
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 51.982176734785,
            "unit": "W",
            "range": 7.112145258986832
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 31.499746119870203,
            "unit": "%",
            "range": 5.671968196170039
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 11.990169882774353,
            "unit": "%",
            "range": 8.471940646241647
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10101678222417831,
            "unit": "s",
            "range": 0.04324260354042053
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 52.21384349429161,
            "unit": "W",
            "range": 6.537984843017739
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 32.18058183944752,
            "unit": "%",
            "range": 6.280408965880001
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 10.954746127128601,
            "unit": "%",
            "range": 5.530181301548397
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.1673455536365509,
            "unit": "s",
            "range": 0.028592094779014587
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 52.163969468532244,
            "unit": "W",
            "range": 6.14374860160727
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 32.316447032846526,
            "unit": "%",
            "range": 6.40367290980946
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 10.602184629440307,
            "unit": "%",
            "range": 4.580064871817882
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.477167129516602,
            "unit": "s",
            "range": 1.4648202657699585
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 83.94590095497622,
            "unit": "W",
            "range": 6.221202055307311
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 33.25711607088372,
            "unit": "%",
            "range": 7.581134399749419
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 9.303547286987305,
            "unit": "%",
            "range": 2.244576603159259
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.409753799438477,
            "unit": "s",
            "range": 3.329479217529297
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 88.36187534257554,
            "unit": "W",
            "range": 7.349619374359134
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 36.40648456487464,
            "unit": "%",
            "range": 11.662898101312177
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 11.21908483505249,
            "unit": "%",
            "range": 6.6391865710752676
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.780385971069336,
            "unit": "s",
            "range": 3.225306749343872
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 88.54284005933417,
            "unit": "W",
            "range": 7.8482009926314085
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 37.74755620104101,
            "unit": "%",
            "range": 13.061572741592482
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 12.65042142868042,
            "unit": "%",
            "range": 9.801123579122358
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004032134893350303,
            "unit": "s",
            "range": 0.00016764758038334548
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 59.414530268897764,
            "unit": "W",
            "range": 4.736757725542473
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 36.77959055703517,
            "unit": "%",
            "range": 17.827760805752565
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 13.28124713897705,
            "unit": "%",
            "range": 9.434378107457409
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0014678954612463713,
            "unit": "s",
            "range": 0.0005946935852989554
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 59.456183304314926,
            "unit": "W",
            "range": 4.765116018667447
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 36.77414831578696,
            "unit": "%",
            "range": 17.83089516480273
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 13.282094287872315,
            "unit": "%",
            "range": 9.433975938532377
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 18.08098030090332,
            "unit": "s",
            "range": 1.9536446332931519
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.159698593904395,
            "unit": "kJ",
            "range": 0.2789200123377995
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6571148633956909,
            "unit": "s",
            "range": 0.1328810155391693
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 9.110737817733057,
            "unit": "W",
            "range": 5.506480869740455
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 84.71423300355269,
            "unit": "%",
            "range": 13.426633677303094
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.6150993704795837,
            "unit": "s",
            "range": 0.09445267915725708
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 7.251800516881,
            "unit": "W",
            "range": 0.17525692005690113
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 77.11445903019731,
            "unit": "%",
            "range": 20.73206657779303
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.3225960731506348,
            "unit": "s",
            "range": 0.2991132438182831
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 46.6116600170091,
            "unit": "W",
            "range": 8.839592309167683
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 76.50595149391674,
            "unit": "%",
            "range": 20.5503486322189
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.2006702423095703,
            "unit": "s",
            "range": 0.3145384192466736
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 40.96622185259399,
            "unit": "W",
            "range": 5.1186242653720795
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 75.19291134875493,
            "unit": "%",
            "range": 20.84369330178813
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.3180084228515625,
            "unit": "s",
            "range": 0.31274110078811646
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 26.86804421726236,
            "unit": "W",
            "range": 22.16593473392376
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 74.72568254612531,
            "unit": "%",
            "range": 21.925637411950397
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22320988774299622,
            "unit": "s",
            "range": 0.0387376993894577
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 7.265007160218556,
            "unit": "W",
            "range": 0.15747833965033675
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 74.84948010220221,
            "unit": "%",
            "range": 22.00428703335526
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.25486406683921814,
            "unit": "s",
            "range": 0.05069941282272339
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 7.253409510008915,
            "unit": "W",
            "range": 0.17212932290106994
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 74.89251044054572,
            "unit": "%",
            "range": 22.019549860730415
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.8114229440689087,
            "unit": "s",
            "range": 0.4608151912689209
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 33.40270338485798,
            "unit": "W",
            "range": 15.931515168678617
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 74.36685519790915,
            "unit": "%",
            "range": 22.31541089284109
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.870810866355896,
            "unit": "s",
            "range": 0.19969730079174042
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 39.3697768956486,
            "unit": "W",
            "range": 7.143046764136199
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 72.6715017667345,
            "unit": "%",
            "range": 23.69569113413927
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.953009843826294,
            "unit": "s",
            "range": 0.25879570841789246
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 26.605253702138704,
            "unit": "W",
            "range": 14.619276859632588
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 72.1656347577172,
            "unit": "%",
            "range": 23.619257020449474
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7416497468948364,
            "unit": "s",
            "range": 0.14900584518909454
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 7.269806457758621,
            "unit": "W",
            "range": 0.1002591585369334
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 72.11577948169882,
            "unit": "%",
            "range": 23.403497702597658
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.8123544454574585,
            "unit": "s",
            "range": 0.09851332753896713
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 19.55136037515764,
            "unit": "W",
            "range": 13.946380751791708
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 71.84932970451169,
            "unit": "%",
            "range": 22.41627985942541
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "JuanPedroGHM",
            "username": "JuanPedroGHM",
            "email": "juanpedroghm@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "724a80b256ef0cea9f71dbe12c124d6713bcbb32",
          "message": "Benchmarks: missing branch argument in gitlab pipeline trigger (#1227)\n\n* missing variable in ci call\r\n\r\n* filter status creation",
          "timestamp": "2023-10-09T09:12:06Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/724a80b256ef0cea9f71dbe12c124d6713bcbb32"
        },
        "date": 1696845330472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 55.78736114501953,
            "unit": "s",
            "range": 11.314675331115723
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.9921207205625,
            "unit": "kJ",
            "range": 0.9108129651380957
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.00757700065150857,
            "unit": "s",
            "range": 0.020734060555696487
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 49.87639845560975,
            "unit": "W",
            "range": 4.2578509669972915
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 80.82613504594491,
            "unit": "%",
            "range": 4.187355819467698
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 13.687237858772278,
            "unit": "%",
            "range": 9.481088586806862
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0008374780300073326,
            "unit": "s",
            "range": 0.0012782190460711718
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 49.96990763858559,
            "unit": "W",
            "range": 4.237705428150179
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 80.72426516180518,
            "unit": "%",
            "range": 4.271062121931783
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 13.707086634635925,
            "unit": "%",
            "range": 9.46321568183581
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.35141587257385254,
            "unit": "s",
            "range": 0.10598938167095184
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 50.49995042809904,
            "unit": "W",
            "range": 4.271981589367044
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 79.44037041494668,
            "unit": "%",
            "range": 7.349940182904267
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 13.798886156082153,
            "unit": "%",
            "range": 9.382926845513005
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.298775851726532,
            "unit": "s",
            "range": 0.09018929302692413
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 51.2663354126909,
            "unit": "W",
            "range": 4.4395604434091895
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 77.45417177225241,
            "unit": "%",
            "range": 14.40430616344331
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 13.898281383514405,
            "unit": "%",
            "range": 9.307776404210498
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7449082136154175,
            "unit": "s",
            "range": 0.2581082880496979
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 52.24650799407776,
            "unit": "W",
            "range": 4.726459544135903
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 76.52685264190418,
            "unit": "%",
            "range": 19.860156857683666
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 13.949684476852417,
            "unit": "%",
            "range": 9.300585128714143
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09399120509624481,
            "unit": "s",
            "range": 0.03459111228585243
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 53.47623048043302,
            "unit": "W",
            "range": 6.293197403594754
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 76.23630938081583,
            "unit": "%",
            "range": 21.880743008218126
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 13.968425416946411,
            "unit": "%",
            "range": 9.298773155840514
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.1661851406097412,
            "unit": "s",
            "range": 0.02613021433353424
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 53.57475209775832,
            "unit": "W",
            "range": 6.260267520167685
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 76.17503481439975,
            "unit": "%",
            "range": 22.034403968023184
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 13.968644714355468,
            "unit": "%",
            "range": 9.29856158630112
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.447792053222656,
            "unit": "s",
            "range": 2.281770944595337
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 101.91252799227972,
            "unit": "W",
            "range": 8.937666323258084
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 75.0273577223065,
            "unit": "%",
            "range": 22.967617013001423
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 14.008415031433106,
            "unit": "%",
            "range": 9.318428734547945
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 22.354755401611328,
            "unit": "s",
            "range": 4.088697910308838
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 106.80628565584239,
            "unit": "W",
            "range": 9.96728010439786
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 73.6908958879318,
            "unit": "%",
            "range": 23.217507212690194
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 14.357549285888672,
            "unit": "%",
            "range": 9.29588105167657
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 22.532583236694336,
            "unit": "s",
            "range": 4.276721954345703
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 106.72286984612796,
            "unit": "W",
            "range": 8.998570050634074
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 73.08467665285026,
            "unit": "%",
            "range": 23.398685801640372
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 12.032056713104248,
            "unit": "%",
            "range": 3.237944960632083
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0009456634288653731,
            "unit": "s",
            "range": 0.001419209293089807
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 64.07727708917629,
            "unit": "W",
            "range": 5.308973604782024
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 75.42270296280276,
            "unit": "%",
            "range": 23.143238080723744
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 14.410399436950684,
            "unit": "%",
            "range": 9.000227251227999
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0020614624954760075,
            "unit": "s",
            "range": 0.0016353533137589693
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 64.18778243452019,
            "unit": "W",
            "range": 5.338695737082786
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 75.50128931074994,
            "unit": "%",
            "range": 23.19131588468861
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 14.419466686248779,
            "unit": "%",
            "range": 8.993723661837437
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 16.911808013916016,
            "unit": "s",
            "range": 1.8824572563171387
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.3133995955104978,
            "unit": "kJ",
            "range": 0.25536059514139076
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6010230183601379,
            "unit": "s",
            "range": 0.11481460183858871
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 11.38115920202092,
            "unit": "W",
            "range": 10.623808934870924
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 87.21788016559738,
            "unit": "%",
            "range": 1.513188864337606
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.27960205078125,
            "unit": "%",
            "range": 0.2880859375
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5360350608825684,
            "unit": "s",
            "range": 0.03402045741677284
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 11.255847421647635,
            "unit": "W",
            "range": 10.695264823780148
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 87.96077910946954,
            "unit": "%",
            "range": 2.5488107656409307
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.27960205078125,
            "unit": "%",
            "range": 0.2880859375
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.1217117309570312,
            "unit": "s",
            "range": 0.23657777905464172
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 53.824509735915434,
            "unit": "W",
            "range": 11.091346279890912
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 88.30191019159113,
            "unit": "%",
            "range": 2.59393527111396
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.2905536726117135,
            "unit": "%",
            "range": 0.2673067836831179
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 2.9718658924102783,
            "unit": "s",
            "range": 0.13829568028450012
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 52.587519540333666,
            "unit": "W",
            "range": 15.179178968834764
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 87.65507909479079,
            "unit": "%",
            "range": 1.7792866572449655
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.4155546963214873,
            "unit": "%",
            "range": 0.1911351522088796
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.1821396350860596,
            "unit": "s",
            "range": 0.1332835704088211
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 18.78812961354826,
            "unit": "W",
            "range": 15.972556799972525
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 87.66298268581231,
            "unit": "%",
            "range": 1.87332188637324
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.47003173828125,
            "unit": "%",
            "range": 0.1695679233807162
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.19667509198188782,
            "unit": "s",
            "range": 0.017168203368782997
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 20.93181758618398,
            "unit": "W",
            "range": 16.71670200702643
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 87.48903512155793,
            "unit": "%",
            "range": 1.945130223157593
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.47003173828125,
            "unit": "%",
            "range": 0.1695679233807162
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2374892681837082,
            "unit": "s",
            "range": 0.02720005437731743
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 21.46370873371577,
            "unit": "W",
            "range": 17.254480983785477
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 87.46012876538353,
            "unit": "%",
            "range": 1.9564688638069399
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.47003173828125,
            "unit": "%",
            "range": 0.1695679233807162
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.6521316766738892,
            "unit": "s",
            "range": 0.18586091697216034
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 42.54782403576265,
            "unit": "W",
            "range": 22.301292111283963
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 87.56793984403926,
            "unit": "%",
            "range": 1.9139989751689375
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.43402099609375,
            "unit": "%",
            "range": 0.2092010586860411
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.9199142456054688,
            "unit": "s",
            "range": 0.18181312084197998
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 46.96565326160652,
            "unit": "W",
            "range": 25.550195919071577
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 87.99547666908745,
            "unit": "%",
            "range": 2.1844286848960723
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.41082763671875,
            "unit": "%",
            "range": 0.3036147820946968
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.9111286401748657,
            "unit": "s",
            "range": 0.20731709897518158
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 52.885648213738044,
            "unit": "W",
            "range": 18.348981076390626
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 88.41263267889438,
            "unit": "%",
            "range": 3.014496086022289
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.42364501953125,
            "unit": "%",
            "range": 0.3220898698058779
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6780017018318176,
            "unit": "s",
            "range": 0.10253068059682846
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 15.546392996434914,
            "unit": "W",
            "range": 13.964819009891047
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 89.34740073230537,
            "unit": "%",
            "range": 3.754251956116911
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.42364501953125,
            "unit": "%",
            "range": 0.3220898698058779
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6788491010665894,
            "unit": "s",
            "range": 0.05435426905751228
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 21.21662812134195,
            "unit": "W",
            "range": 12.703090433712195
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 89.50606118118604,
            "unit": "%",
            "range": 3.953018628687951
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.42364501953125,
            "unit": "%",
            "range": 0.3220898698058779
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sai-Suraj-27",
            "username": "Sai-Suraj-27",
            "email": "sai.suraj.27.729@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a32efdb1df74d0b1c57931d6f5e441d1ebff09b9",
          "message": "Updated `.pre-commit-config.yaml` file and reformatted few files for better readability. (#1211)\n\n* Used pylint automated tool to update from .format to f-strings.\r\n\r\n* Updated the pre-commit configuration file.\r\n\r\n* Reformatted 2 more files to use f-strings.\r\n\r\n* Added new check that verifies .toml files in the repo, and updated black repo link.\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-10-12T04:37:21Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/a32efdb1df74d0b1c57931d6f5e441d1ebff09b9"
        },
        "date": 1697086999623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 60.47065353393555,
            "unit": "s",
            "range": 8.831391334533691
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.563966734054688,
            "unit": "kJ",
            "range": 0.7654355512640935
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.005564832128584385,
            "unit": "s",
            "range": 0.015212520956993103
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 51.508849404232535,
            "unit": "W",
            "range": 5.73496410292711
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 24.1721173698035,
            "unit": "%",
            "range": 3.1628969431341782
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 14.353278493881225,
            "unit": "%",
            "range": 9.265653891818896
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00029110832838341594,
            "unit": "s",
            "range": 0.00012181716010672972
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 51.71298598240021,
            "unit": "W",
            "range": 5.675946711286795
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 24.290434500686892,
            "unit": "%",
            "range": 3.21988751431144
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 14.366141414642334,
            "unit": "%",
            "range": 9.251776304066254
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.36606013774871826,
            "unit": "s",
            "range": 0.13507241010665894
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 52.91281844041241,
            "unit": "W",
            "range": 5.771813800253857
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 25.003572445928643,
            "unit": "%",
            "range": 3.5402755909495855
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 14.40151505470276,
            "unit": "%",
            "range": 9.215035950511071
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.304084837436676,
            "unit": "s",
            "range": 0.13362672924995422
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.702601950469514,
            "unit": "W",
            "range": 6.592191763264783
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 26.1223368365623,
            "unit": "%",
            "range": 4.0695526843861956
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 14.419933652877807,
            "unit": "%",
            "range": 9.197622630705506
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6866452097892761,
            "unit": "s",
            "range": 0.27626144886016846
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 55.62813734966812,
            "unit": "W",
            "range": 6.762977754458709
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 27.092713952064663,
            "unit": "%",
            "range": 4.616533756013383
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 14.433641815185547,
            "unit": "%",
            "range": 9.199194859851586
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10040156543254852,
            "unit": "s",
            "range": 0.04669195041060448
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 56.481289360716445,
            "unit": "W",
            "range": 8.05378591057715
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 27.533158800419102,
            "unit": "%",
            "range": 4.920966610996647
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 14.446846675872802,
            "unit": "%",
            "range": 9.219068364816176
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.1675301343202591,
            "unit": "s",
            "range": 0.037118099629879
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 56.74335315580638,
            "unit": "W",
            "range": 8.218231770131421
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 27.623730917864407,
            "unit": "%",
            "range": 4.997210671930903
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 14.449577379226685,
            "unit": "%",
            "range": 9.225899762252952
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.90272045135498,
            "unit": "s",
            "range": 1.9667556285858154
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 88.64328459515215,
            "unit": "W",
            "range": 6.273595051921986
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 28.089565961523135,
            "unit": "%",
            "range": 4.467811764602459
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 14.402999877929688,
            "unit": "%",
            "range": 9.317269100906994
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 24.261812210083008,
            "unit": "s",
            "range": 3.9632585048675537
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 90.40016777094192,
            "unit": "W",
            "range": 7.223480524141712
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 28.43067134765505,
            "unit": "%",
            "range": 4.342067047643432
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 14.103629207611084,
            "unit": "%",
            "range": 8.345046349638652
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 24.04513931274414,
            "unit": "s",
            "range": 4.235551834106445
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 91.61068009051056,
            "unit": "W",
            "range": 6.537435799636333
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 29.3411847893787,
            "unit": "%",
            "range": 3.9011727976445263
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 12.494498682022094,
            "unit": "%",
            "range": 3.807575650234944
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005474090576171875,
            "unit": "s",
            "range": 0.00020142360881436616
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 64.65211864918746,
            "unit": "W",
            "range": 6.574677712469169
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 28.899277628235303,
            "unit": "%",
            "range": 4.178183664618654
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 15.410915660858155,
            "unit": "%",
            "range": 8.633014947251194
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.002167129423469305,
            "unit": "s",
            "range": 0.001327261794358492
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 64.70961432425405,
            "unit": "W",
            "range": 6.569522518539486
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 28.89971835734907,
            "unit": "%",
            "range": 4.178530382178055
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 15.416102600097656,
            "unit": "%",
            "range": 8.6294163339939
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 17.53148651123047,
            "unit": "s",
            "range": 1.6468853950500488
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 967.5927642938475,
            "unit": "J",
            "range": 224.7602839361693
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6468690633773804,
            "unit": "s",
            "range": 0.14477534592151642
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 12.571030422055518,
            "unit": "W",
            "range": 10.932127495992125
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 31.40404209271974,
            "unit": "%",
            "range": 0.11607318805195059
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.216064453125
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.6135107278823853,
            "unit": "s",
            "range": 0.03035014308989048
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 14.463759330060759,
            "unit": "W",
            "range": 13.528066870198531
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 31.257841524224023,
            "unit": "%",
            "range": 0.12291488170155088
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.3426623851060868,
            "unit": "%",
            "range": 0.21474584312521502
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.2289490699768066,
            "unit": "s",
            "range": 0.22846408188343048
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 43.620479905060826,
            "unit": "W",
            "range": 13.596174228164813
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 31.7698472149623,
            "unit": "%",
            "range": 1.5093889488426258
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.2875876486301423,
            "unit": "%",
            "range": 0.2726999845454847
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.2962403297424316,
            "unit": "s",
            "range": 0.31408044695854187
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 43.98138077980103,
            "unit": "W",
            "range": 11.978885291413313
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 32.375693861338064,
            "unit": "%",
            "range": 1.9918572054747112
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.2879200279712677,
            "unit": "%",
            "range": 0.272086451442363
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.0464246273040771,
            "unit": "s",
            "range": 0.07311129570007324
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 14.624875787591842,
            "unit": "W",
            "range": 13.231589369538654
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 32.78580696775307,
            "unit": "%",
            "range": 2.390155261761452
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.3358707278966904,
            "unit": "%",
            "range": 0.21598177054882042
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.17017874121665955,
            "unit": "s",
            "range": 0.021947436034679413
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 14.952837480389409,
            "unit": "W",
            "range": 13.992734153366397
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 32.70382876882083,
            "unit": "%",
            "range": 2.1836661542611058
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.34307861328125,
            "unit": "%",
            "range": 0.21473274831343772
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2375410795211792,
            "unit": "s",
            "range": 0.04626565799117088
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 14.890715708034211,
            "unit": "W",
            "range": 14.00552295537412
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 32.63882381640006,
            "unit": "%",
            "range": 2.048723859712222
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.34307861328125,
            "unit": "%",
            "range": 0.21473274831343772
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.668572187423706,
            "unit": "s",
            "range": 0.32434043288230896
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 29.742742630812813,
            "unit": "W",
            "range": 22.155627683338274
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 32.58798650586897,
            "unit": "%",
            "range": 2.403376559959448
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.34307861328125,
            "unit": "%",
            "range": 0.21473274831343772
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.0321249961853027,
            "unit": "s",
            "range": 0.26462602615356445
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 34.81611245040275,
            "unit": "W",
            "range": 13.123226951801648
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 32.3447531751636,
            "unit": "%",
            "range": 2.2699938816082343
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.4093509674072267,
            "unit": "%",
            "range": 0.029263662767613337
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.726906180381775,
            "unit": "s",
            "range": 0.426612913608551
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 32.39918642533284,
            "unit": "W",
            "range": 24.32963848259863
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 31.918579446000745,
            "unit": "%",
            "range": 1.869685884222718
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.4785373151302337,
            "unit": "%",
            "range": 0.1648080786300417
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.741828441619873,
            "unit": "s",
            "range": 0.1595792919397354
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 14.691242601790776,
            "unit": "W",
            "range": 14.160629189615463
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 31.9860676779026,
            "unit": "%",
            "range": 1.8982050970980562
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.164794921875
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.8262279629707336,
            "unit": "s",
            "range": 0.18227311968803406
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 24.601567791206172,
            "unit": "W",
            "range": 12.657603329802015
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 31.957383070250295,
            "unit": "%",
            "range": 1.8618385704070273
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.164794921875
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5beb2543f6bbda54012823d117def344df9f1ee7",
          "message": "Merge pull request #1230 from helmholtz-analytics/bugs/1229-_Bug_UserWarning_TypedStorage_is_deprecated\n\nRemove calls to deprecated `Tensor.storage()` when using newer PyTorch versions",
          "timestamp": "2023-10-13T10:45:25Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/5beb2543f6bbda54012823d117def344df9f1ee7"
        },
        "date": 1697195901924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 55.032859802246094,
            "unit": "s",
            "range": 2.288210153579712
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 6.838924052543751,
            "unit": "kJ",
            "range": 0.3460141739230542
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.004442318342626095,
            "unit": "s",
            "range": 0.011382821016013622
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 55.747700733492614,
            "unit": "W",
            "range": 9.97926677234325
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 99.14675481122748,
            "unit": "%",
            "range": 0.6588248042098502
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 13.101806116104125,
            "unit": "%",
            "range": 3.343390212670488
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003253370523452759,
            "unit": "s",
            "range": 0.000030258233891800046
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 55.70474373884603,
            "unit": "W",
            "range": 9.643771741302562
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 99.08751676039331,
            "unit": "%",
            "range": 0.7573631770985972
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 13.114948034286499,
            "unit": "%",
            "range": 3.317647046707926
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.32325485348701477,
            "unit": "s",
            "range": 0.041485436260700226
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 55.44551850243346,
            "unit": "W",
            "range": 7.862333799377196
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 98.7932449474676,
            "unit": "%",
            "range": 1.4823988295190613
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 13.18589415550232,
            "unit": "%",
            "range": 3.183101241384809
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.2822093367576599,
            "unit": "s",
            "range": 0.03129824995994568
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 55.04828923090126,
            "unit": "W",
            "range": 5.253958495495483
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 98.29783746613725,
            "unit": "%",
            "range": 2.845840735157734
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 13.290315198898316,
            "unit": "%",
            "range": 2.998149379203192
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.650909423828125,
            "unit": "s",
            "range": 0.06658753007650375
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 54.71111752015071,
            "unit": "W",
            "range": 3.240121717421949
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 97.65947338526752,
            "unit": "%",
            "range": 4.53578742837434
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 13.367791175842285,
            "unit": "%",
            "range": 2.904818745710563
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09289976209402084,
            "unit": "s",
            "range": 0.02112824283540249
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 54.645730824248425,
            "unit": "W",
            "range": 3.0687297250544976
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 97.5133299941763,
            "unit": "%",
            "range": 4.953962321930678
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 13.408444547653199,
            "unit": "%",
            "range": 2.8951716100853964
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.15634670853614807,
            "unit": "s",
            "range": 0.02173776365816593
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 54.65011385200611,
            "unit": "W",
            "range": 3.152754958963496
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 97.54257474442564,
            "unit": "%",
            "range": 4.898167183945299
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 13.419654369354248,
            "unit": "%",
            "range": 2.8938215360144257
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.692310333251953,
            "unit": "s",
            "range": 0.7423368692398071
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 119.5805740463826,
            "unit": "W",
            "range": 2.9651028516164777
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 97.88984404012716,
            "unit": "%",
            "range": 4.206034771227191
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 16.495064210891723,
            "unit": "%",
            "range": 8.6817178478373
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 22.396333694458008,
            "unit": "s",
            "range": 2.083219051361084
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 121.5221314478384,
            "unit": "W",
            "range": 3.9835122215190006
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 96.90191935589496,
            "unit": "%",
            "range": 4.942240609373106
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 19.73650417327881,
            "unit": "%",
            "range": 17.894158185304235
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 21.880096435546875,
            "unit": "s",
            "range": 1.237045168876648
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 121.1546700806661,
            "unit": "W",
            "range": 3.8246349987563795
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 96.58130653547907,
            "unit": "%",
            "range": 4.935108310596944
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 19.60086669921875,
            "unit": "%",
            "range": 18.274633517763387
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004695892275776714,
            "unit": "s",
            "range": 0.00007294854731298983
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 68.79883029490517,
            "unit": "W",
            "range": 3.620273286172137
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 96.20281409934653,
            "unit": "%",
            "range": 5.851529513589717
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 19.96062340736389,
            "unit": "%",
            "range": 18.035188888876373
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0016475677257403731,
            "unit": "s",
            "range": 0.0007130595622584224
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 68.91190405183295,
            "unit": "W",
            "range": 3.6190972416295764
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 96.20251001904393,
            "unit": "%",
            "range": 5.852397932189008
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 19.96234369277954,
            "unit": "%",
            "range": 18.034048445739383
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 17.908559799194336,
            "unit": "s",
            "range": 1.5658024549484253
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.7080303145153322,
            "unit": "kJ",
            "range": 0.4760555172230565
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6373046636581421,
            "unit": "s",
            "range": 0.07715817540884018
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 26.16773420125101,
            "unit": "W",
            "range": 20.37569454671251
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 98.07799321430363,
            "unit": "%",
            "range": 1.7875665146533668
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 10.170251655578614,
            "unit": "%",
            "range": 11.839158558418474
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5921765565872192,
            "unit": "s",
            "range": 0.09913346916437149
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 26.141606961057363,
            "unit": "W",
            "range": 20.4343699819291
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 98.45733172054341,
            "unit": "%",
            "range": 2.3526743055678416
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 9.59802703857422,
            "unit": "%",
            "range": 10.778778688417491
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.2943263053894043,
            "unit": "s",
            "range": 0.36478692293167114
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 76.56301914624606,
            "unit": "W",
            "range": 21.242677457112798
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 99.02590151420495,
            "unit": "%",
            "range": 1.4754035690183123
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 7.1474112391471865,
            "unit": "%",
            "range": 8.95209400906877
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.32627534866333,
            "unit": "s",
            "range": 0.2827206552028656
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 71.25539145167106,
            "unit": "W",
            "range": 19.506419646567284
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 99.19172585255654,
            "unit": "%",
            "range": 1.2977801352964295
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.254447102546692,
            "unit": "s",
            "range": 0.16025526821613312
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 21.91696255073756,
            "unit": "W",
            "range": 19.04747279844106
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 99.29514911613906,
            "unit": "%",
            "range": 1.2135127691844967
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22847405076026917,
            "unit": "s",
            "range": 0.026028968393802643
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 21.827556963947814,
            "unit": "W",
            "range": 19.0888277427581
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 99.28832271028884,
            "unit": "%",
            "range": 1.2750607966554037
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.24887672066688538,
            "unit": "s",
            "range": 0.01830379292368889
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 21.79045161718866,
            "unit": "W",
            "range": 19.085978541281793
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 99.22322318594212,
            "unit": "%",
            "range": 1.2606963826516075
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.707282304763794,
            "unit": "s",
            "range": 0.11274522542953491
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 45.85917346799209,
            "unit": "W",
            "range": 21.371345676376524
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 98.62073651740255,
            "unit": "%",
            "range": 1.720607991414032
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.0154950618743896,
            "unit": "s",
            "range": 0.10507124662399292
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 60.259335303228056,
            "unit": "W",
            "range": 24.4789466946512
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 98.99652634140178,
            "unit": "%",
            "range": 1.3026842418690099
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 6.87042236328125,
            "unit": "%",
            "range": 9.103068607782923
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.087876796722412,
            "unit": "s",
            "range": 0.22302968800067902
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 59.53716152446741,
            "unit": "W",
            "range": 15.774254886553688
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 98.99230606474273,
            "unit": "%",
            "range": 1.2180512805911463
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 7.032718563079834,
            "unit": "%",
            "range": 9.006253426866035
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6786643266677856,
            "unit": "s",
            "range": 0.07057461142539978
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 24.240152731451793,
            "unit": "W",
            "range": 18.84479560902143
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 99.28722907648037,
            "unit": "%",
            "range": 1.2057748680185831
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 7.221616578102112,
            "unit": "%",
            "range": 8.924363871364994
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6820924282073975,
            "unit": "s",
            "range": 0.05599083751440048
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 35.85377526455592,
            "unit": "W",
            "range": 22.020466101385924
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 99.03047626530702,
            "unit": "%",
            "range": 2.1927199492196534
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 7.23052978515625,
            "unit": "%",
            "range": 8.921400952814546
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lukas Scheib",
            "username": "LScheib",
            "email": "146953413+LScheib@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cd887e40eec0b95e983c65dab652ed73fac5b519",
          "message": "Update Heat Tutorials, fix typos. (#1238)\n\n* Minor linguistic corrections in the Heat Tutorials.\r\n\r\n* Other corrections in the cluster analysis tutorial.\r\n\r\n* dummy commit to find out why CI got stuck\r\n\r\nremoved on \"=\" in getting started...\r\n\r\n---------\r\n\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-10-16T07:35:35Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/cd887e40eec0b95e983c65dab652ed73fac5b519"
        },
        "date": 1697441939436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 53.282188415527344,
            "unit": "s",
            "range": 8.292202949523926
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 4.916674456301561,
            "unit": "kJ",
            "range": 0.8533255724598885
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0023760043550282717,
            "unit": "s",
            "range": 0.005674815271049738
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 49.57326642499221,
            "unit": "W",
            "range": 6.079205192808402
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 22.107136314806937,
            "unit": "%",
            "range": 4.286800673081902
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 13.725915384292602,
            "unit": "%",
            "range": 9.661373471799466
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0002994961978401989,
            "unit": "s",
            "range": 0.00011262312182225287
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 49.73254874407989,
            "unit": "W",
            "range": 5.8337387481591065
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 22.267263369508886,
            "unit": "%",
            "range": 4.362725838810628
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 13.73464515209198,
            "unit": "%",
            "range": 9.65230740165891
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.36361461877822876,
            "unit": "s",
            "range": 0.12945111095905304
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 50.26472286253356,
            "unit": "W",
            "range": 5.191141388157617
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 23.15188329871312,
            "unit": "%",
            "range": 4.7252636580530565
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 13.761642742156983,
            "unit": "%",
            "range": 9.624666706437086
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.3258262276649475,
            "unit": "s",
            "range": 0.1069025918841362
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 50.72945403060678,
            "unit": "W",
            "range": 4.904355703812346
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 24.63710636860028,
            "unit": "%",
            "range": 5.358831162836893
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 13.779413938522339,
            "unit": "%",
            "range": 9.606801457906215
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6713364720344543,
            "unit": "s",
            "range": 0.2092108130455017
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 51.12141942955335,
            "unit": "W",
            "range": 4.610971943158442
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 26.433616031828166,
            "unit": "%",
            "range": 6.290723933676731
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 13.78566517829895,
            "unit": "%",
            "range": 9.600579618369462
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10052891075611115,
            "unit": "s",
            "range": 0.04084985703229904
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 51.41921492053308,
            "unit": "W",
            "range": 4.091812859519454
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 27.289453256185244,
            "unit": "%",
            "range": 6.814166173823493
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 13.787687683105469,
            "unit": "%",
            "range": 9.59857360720495
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.17229361832141876,
            "unit": "s",
            "range": 0.038889527320861816
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 51.51651933578423,
            "unit": "W",
            "range": 3.91575370987835
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 27.549473566135767,
            "unit": "%",
            "range": 6.976599132677694
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 13.787935066223145,
            "unit": "%",
            "range": 9.598328475998247
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.465616226196289,
            "unit": "s",
            "range": 1.9517381191253662
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 88.13238037469141,
            "unit": "W",
            "range": 7.689805926599151
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 28.345778351271086,
            "unit": "%",
            "range": 6.4046623522681445
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 13.892303347587585,
            "unit": "%",
            "range": 9.568724756552228
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 20.775646209716797,
            "unit": "s",
            "range": 3.9131546020507812
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 91.05828582965384,
            "unit": "W",
            "range": 7.917367782415749
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 28.89751634892938,
            "unit": "%",
            "range": 6.789118529941229
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 12.194092607498169,
            "unit": "%",
            "range": 4.693587080027302
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 21.774826049804688,
            "unit": "s",
            "range": 4.8934550285339355
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 91.84712310712406,
            "unit": "W",
            "range": 8.877234403437951
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 29.80841337990791,
            "unit": "%",
            "range": 6.427209222671222
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 13.597479963302613,
            "unit": "%",
            "range": 7.130655608124235
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005298614269122481,
            "unit": "s",
            "range": 0.0002077693643514067
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 61.98611111406035,
            "unit": "W",
            "range": 5.02282059782634
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 31.054095059204975,
            "unit": "%",
            "range": 6.275845956941873
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 14.823896408081055,
            "unit": "%",
            "range": 9.068892017239556
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.00201072683557868,
            "unit": "s",
            "range": 0.0013619617093354464
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 62.113428088529,
            "unit": "W",
            "range": 4.987561665953266
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 31.06337499296801,
            "unit": "%",
            "range": 6.278676714002783
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 14.832388401031494,
            "unit": "%",
            "range": 9.063791066322693
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 16.714366912841797,
            "unit": "s",
            "range": 2.137990713119507
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 897.9029176288086,
            "unit": "J",
            "range": 189.7747384141097
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6394041776657104,
            "unit": "s",
            "range": 0.06976551562547684
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 13.846119540976193,
            "unit": "W",
            "range": 13.135788664899755
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 31.422333459020905,
            "unit": "%",
            "range": 0.13661843344533783
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5528019070625305,
            "unit": "s",
            "range": 0.07487761974334717
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 12.966775370894428,
            "unit": "W",
            "range": 11.79208484130579
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 31.310212717271583,
            "unit": "%",
            "range": 0.07318749257013017
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.2321689128875732,
            "unit": "s",
            "range": 0.24509921669960022
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 39.912521793019316,
            "unit": "W",
            "range": 12.442220074425451
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 31.27422409603622,
            "unit": "%",
            "range": 0.05893528648601747
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.2381832599639893,
            "unit": "s",
            "range": 0.14099912345409393
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 38.36633854695448,
            "unit": "W",
            "range": 11.714809956328407
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 31.485584241545997,
            "unit": "%",
            "range": 0.6313031608208298
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 0.8489211797714233,
            "unit": "s",
            "range": 0.1785738319158554
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 10.822010358900005,
            "unit": "W",
            "range": 10.730969945854548
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 31.943889025245767,
            "unit": "%",
            "range": 1.8468437512344384
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.1935988962650299,
            "unit": "s",
            "range": 0.031195957213640213
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 10.828073189096694,
            "unit": "W",
            "range": 10.738368664501001
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 32.22619562199263,
            "unit": "%",
            "range": 1.9136764734247005
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.21209999918937683,
            "unit": "s",
            "range": 0.04952601343393326
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 10.841303616627503,
            "unit": "W",
            "range": 10.739472185741423
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 32.303074423847896,
            "unit": "%",
            "range": 1.919409477057867
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.20758056640625,
            "unit": "%",
            "range": 0.33004390381151677
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.5661399364471436,
            "unit": "s",
            "range": 0.3075512647628784
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 20.217953659654032,
            "unit": "W",
            "range": 17.949628602173753
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 31.83626154202359,
            "unit": "%",
            "range": 1.2963329946907787
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.2267462968826295,
            "unit": "%",
            "range": 0.3048115556418825
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.76055109500885,
            "unit": "s",
            "range": 0.25606322288513184
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 31.923338988120115,
            "unit": "W",
            "range": 13.24832993940599
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 32.11467001236307,
            "unit": "%",
            "range": 1.8208964810379897
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.269562965631485,
            "unit": "%",
            "range": 0.2846198116857638
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.7998088598251343,
            "unit": "s",
            "range": 0.3130300045013428
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 31.97012396083802,
            "unit": "W",
            "range": 23.458166294690688
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 32.14014179554444,
            "unit": "%",
            "range": 2.0108747758041137
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.2711719453334809,
            "unit": "%",
            "range": 0.2849640550224783
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7926381230354309,
            "unit": "s",
            "range": 0.21529801189899445
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 14.223802781186981,
            "unit": "W",
            "range": 13.7105357576591
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 32.04888518276087,
            "unit": "%",
            "range": 2.360423003991501
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.276483991742134,
            "unit": "%",
            "range": 0.2866753199236596
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7052397131919861,
            "unit": "s",
            "range": 0.1380646824836731
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 18.697974105309754,
            "unit": "W",
            "range": 17.747991615930843
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 31.630724957314534,
            "unit": "%",
            "range": 1.093282126935037
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.27960205078125,
            "unit": "%",
            "range": 0.2880859375
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lukas Scheib",
            "username": "LScheib",
            "email": "146953413+LScheib@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cd887e40eec0b95e983c65dab652ed73fac5b519",
          "message": "Update Heat Tutorials, fix typos. (#1238)\n\n* Minor linguistic corrections in the Heat Tutorials.\r\n\r\n* Other corrections in the cluster analysis tutorial.\r\n\r\n* dummy commit to find out why CI got stuck\r\n\r\nremoved on \"=\" in getting started...\r\n\r\n---------\r\n\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-10-16T07:35:35Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/cd887e40eec0b95e983c65dab652ed73fac5b519"
        },
        "date": 1697442788161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 52.860076904296875,
            "unit": "s",
            "range": 9.042645454406738
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.270269591484374,
            "unit": "kJ",
            "range": 0.8409414747019556
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.002713940106332302,
            "unit": "s",
            "range": 0.0062650470063090324
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 60.59588262273775,
            "unit": "W",
            "range": 18.68346693327971
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 32.45231413619517,
            "unit": "%",
            "range": 6.968496558473407
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 14.025374460220338,
            "unit": "%",
            "range": 9.820031000520062
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003306228609289974,
            "unit": "s",
            "range": 0.00010444095096318051
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 61.0737457782988,
            "unit": "W",
            "range": 19.689471722753638
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 32.697091571409615,
            "unit": "%",
            "range": 6.933855740440651
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 14.033796453475953,
            "unit": "%",
            "range": 9.81141222286753
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.34717100858688354,
            "unit": "s",
            "range": 0.1452292650938034
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 60.57465507398613,
            "unit": "W",
            "range": 16.009019135436297
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 34.358324340133436,
            "unit": "%",
            "range": 7.416959679564956
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 14.042137718200683,
            "unit": "%",
            "range": 9.802932778078725
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.31776663661003113,
            "unit": "s",
            "range": 0.1351548731327057
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 59.4381053885116,
            "unit": "W",
            "range": 9.565377497788333
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 36.9606418613637,
            "unit": "%",
            "range": 9.350659265725701
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 14.048231267929078,
            "unit": "%",
            "range": 9.79677404723458
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6471436619758606,
            "unit": "s",
            "range": 0.2851822078227997
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 57.97711313171307,
            "unit": "W",
            "range": 5.651287872393161
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 38.92681475449142,
            "unit": "%",
            "range": 10.785805058391425
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 14.055695199966431,
            "unit": "%",
            "range": 9.789271512554123
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09166844189167023,
            "unit": "s",
            "range": 0.01735561154782772
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 58.01456894081573,
            "unit": "W",
            "range": 7.0248381862180205
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 39.647030518541456,
            "unit": "%",
            "range": 11.46272018779993
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 14.058789443969726,
            "unit": "%",
            "range": 9.78617460151482
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.15705737471580505,
            "unit": "s",
            "range": 0.03322939574718475
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 57.899686075891985,
            "unit": "W",
            "range": 6.467773046651825
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 39.65175206406212,
            "unit": "%",
            "range": 11.48133582956469
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 14.05898642539978,
            "unit": "%",
            "range": 9.785977715238143
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 7.8330254554748535,
            "unit": "s",
            "range": 1.8111032247543335
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 94.69653861817427,
            "unit": "W",
            "range": 6.2151948818618195
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 37.46196864526028,
            "unit": "%",
            "range": 8.235779160834833
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 14.024503040313721,
            "unit": "%",
            "range": 9.769103830387763
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.413869857788086,
            "unit": "s",
            "range": 3.358713388442993
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 96.81311570162889,
            "unit": "W",
            "range": 6.364307367205508
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 38.63701412670626,
            "unit": "%",
            "range": 7.119498449814074
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 12.82958688735962,
            "unit": "%",
            "range": 5.7247664428588845
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 21.40993309020996,
            "unit": "s",
            "range": 4.218769550323486
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 98.86996251530965,
            "unit": "W",
            "range": 6.041029444701161
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 39.56487580346488,
            "unit": "%",
            "range": 7.417286307549692
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 13.357411193847657,
            "unit": "%",
            "range": 5.634654849047105
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0003341674746479839,
            "unit": "s",
            "range": 0.0001325100747635588
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 63.859727838882826,
            "unit": "W",
            "range": 4.165285724397661
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 42.623878710084114,
            "unit": "%",
            "range": 9.846613238115484
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 15.274338054656983,
            "unit": "%",
            "range": 9.235990588543704
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0011192321544513106,
            "unit": "s",
            "range": 0.0004838660534005612
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 63.87962029093872,
            "unit": "W",
            "range": 4.169104318658136
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 42.627619623954324,
            "unit": "%",
            "range": 9.85047113891716
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 15.275385189056397,
            "unit": "%",
            "range": 9.23558453016357
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 17.950490951538086,
            "unit": "s",
            "range": 3.1392574310302734
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.7287420537382812,
            "unit": "kJ",
            "range": 0.5234234289435259
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5696746706962585,
            "unit": "s",
            "range": 0.10462111979722977
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 45.87909605103872,
            "unit": "W",
            "range": 17.294618495564258
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 63.126923057206724,
            "unit": "%",
            "range": 7.202137767915143
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 46.694640922546384,
            "unit": "%",
            "range": 29.639115788027876
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5336602330207825,
            "unit": "s",
            "range": 0.04317956417798996
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 45.74727879176717,
            "unit": "W",
            "range": 17.404420584641272
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 59.28410933090803,
            "unit": "%",
            "range": 12.521169677078351
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 46.69584636688232,
            "unit": "%",
            "range": 29.639886716737937
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.1344828605651855,
            "unit": "s",
            "range": 0.3958022892475128
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 80.92647878864369,
            "unit": "W",
            "range": 19.412630997497203
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 59.206886677985,
            "unit": "%",
            "range": 13.559877538862025
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 46.72049102783203,
            "unit": "%",
            "range": 29.65566627674132
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.28728985786438,
            "unit": "s",
            "range": 0.16075845062732697
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 76.91079823800355,
            "unit": "W",
            "range": 21.27425545066896
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 58.40808585082957,
            "unit": "%",
            "range": 13.26992426220615
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 46.81020221710205,
            "unit": "%",
            "range": 29.7134023869108
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.1472898721694946,
            "unit": "s",
            "range": 0.25529173016548157
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 51.105194302851984,
            "unit": "W",
            "range": 15.64075997411983
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 57.69842065493115,
            "unit": "%",
            "range": 12.927428092797783
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 46.844852447509766,
            "unit": "%",
            "range": 29.73623940043752
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.20504090189933777,
            "unit": "s",
            "range": 0.0243053138256073
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 46.24242212936471,
            "unit": "W",
            "range": 17.81272479139332
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 57.92118965442826,
            "unit": "%",
            "range": 12.929891988772576
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 46.797357368469235,
            "unit": "%",
            "range": 29.70481981872737
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.23702053725719452,
            "unit": "s",
            "range": 0.04276447370648384
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 46.337723289995736,
            "unit": "W",
            "range": 17.899642080930693
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 58.13088625594615,
            "unit": "%",
            "range": 13.052809616561191
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 46.728022766113284,
            "unit": "%",
            "range": 29.660121900912152
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.7561686038970947,
            "unit": "s",
            "range": 0.1651344746351242
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 64.76027728180757,
            "unit": "W",
            "range": 23.81065311965805
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 57.14232619895197,
            "unit": "%",
            "range": 14.159894350179124
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 42.28932056427002,
            "unit": "%",
            "range": 29.831840933075668
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.2021307945251465,
            "unit": "s",
            "range": 0.32742127776145935
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 70.96777547956587,
            "unit": "W",
            "range": 21.763730750954903
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 55.961445360822225,
            "unit": "%",
            "range": 14.0867447700355
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 40.307878747582436,
            "unit": "%",
            "range": 31.76459350507732
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.1238319873809814,
            "unit": "s",
            "range": 0.44552725553512573
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 67.84237485123522,
            "unit": "W",
            "range": 23.509397541736565
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 55.86900782344223,
            "unit": "%",
            "range": 12.590185955366536
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 40.31447930037975,
            "unit": "%",
            "range": 31.756503351872027
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6952828168869019,
            "unit": "s",
            "range": 0.14161518216133118
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 43.47901885582368,
            "unit": "W",
            "range": 20.233886939582717
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 56.362187031483515,
            "unit": "%",
            "range": 13.103672620508323
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 40.31524658203125,
            "unit": "%",
            "range": 31.755563578913485
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7529463171958923,
            "unit": "s",
            "range": 0.17298197746276855
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 45.03515086214692,
            "unit": "W",
            "range": 22.243958182735245
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 56.402201682078456,
            "unit": "%",
            "range": 12.442196006620394
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 40.31524658203125,
            "unit": "%",
            "range": 31.755563578913485
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5bad2ef55ba9981656cfda5c3885048fb51bd646",
          "message": "Merge pull request #1250 from helmholtz-analytics/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2023-10-18T11:10:57Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/5bad2ef55ba9981656cfda5c3885048fb51bd646"
        },
        "date": 1697630460671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 58.30790328979492,
            "unit": "s",
            "range": 8.940595626831055
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 6.037170078586719,
            "unit": "kJ",
            "range": 0.6214170861630026
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.005692769773304462,
            "unit": "s",
            "range": 0.015208626165986061
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 48.815307958348406,
            "unit": "W",
            "range": 4.774980925029384
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 73.06133307914861,
            "unit": "%",
            "range": 4.008342999739318
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 12.084026622772218,
            "unit": "%",
            "range": 10.059084660099408
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00048002490075305104,
            "unit": "s",
            "range": 0.00013479360495693982
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 48.907355992854846,
            "unit": "W",
            "range": 4.770774430375965
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 73.36312981663443,
            "unit": "%",
            "range": 4.155061013562126
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 12.090753054618835,
            "unit": "%",
            "range": 10.052561863571327
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3629324734210968,
            "unit": "s",
            "range": 0.12301553785800934
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 49.395019487878436,
            "unit": "W",
            "range": 4.7927724842643835
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 74.98669876736355,
            "unit": "%",
            "range": 5.269089795608109
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 12.137880206108093,
            "unit": "%",
            "range": 10.007883434746033
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.32464784383773804,
            "unit": "s",
            "range": 0.08828528225421906
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 50.18723293562656,
            "unit": "W",
            "range": 4.8872878821482
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 77.66602775340166,
            "unit": "%",
            "range": 7.450743058354808
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 12.199532556533814,
            "unit": "%",
            "range": 9.952164513113892
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7812963724136353,
            "unit": "s",
            "range": 0.14718303084373474
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 51.14444265261709,
            "unit": "W",
            "range": 5.09199390108031
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 81.0006393610159,
            "unit": "%",
            "range": 10.395794807231665
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 12.209069418907166,
            "unit": "%",
            "range": 9.944149446469263
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.0989958792924881,
            "unit": "s",
            "range": 0.032673317939043045
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 51.803733128517266,
            "unit": "W",
            "range": 4.988966055534659
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 81.94842862385501,
            "unit": "%",
            "range": 11.32702999053757
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 12.210733985900879,
            "unit": "%",
            "range": 9.943504365294242
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.16997087001800537,
            "unit": "s",
            "range": 0.0233033187687397
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 51.974132552531046,
            "unit": "W",
            "range": 4.904221892431255
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 81.82781543981362,
            "unit": "%",
            "range": 11.223730607263034
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 12.211454582214355,
            "unit": "%",
            "range": 9.943235941381712
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.720792770385742,
            "unit": "s",
            "range": 1.7563197612762451
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 100.25598834142846,
            "unit": "W",
            "range": 11.64628913970841
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 80.59804714086806,
            "unit": "%",
            "range": 10.543906953198352
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 12.349639940261842,
            "unit": "%",
            "range": 9.899770661511035
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 22.97867202758789,
            "unit": "s",
            "range": 3.0866730213165283
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 101.53117950137897,
            "unit": "W",
            "range": 13.657414913723766
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 80.71985062460614,
            "unit": "%",
            "range": 10.662374072373064
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 11.315149974822997,
            "unit": "%",
            "range": 6.520850003639716
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.112937927246094,
            "unit": "s",
            "range": 3.5994491577148438
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 104.27221492600253,
            "unit": "W",
            "range": 11.888736901259211
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 82.30101519559655,
            "unit": "%",
            "range": 10.507899408252081
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 11.343033146858215,
            "unit": "%",
            "range": 7.059400209819799
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005424499395303428,
            "unit": "s",
            "range": 0.0001624702854314819
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 62.99724400129621,
            "unit": "W",
            "range": 5.40708518971852
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 84.25342049728826,
            "unit": "%",
            "range": 10.727778528817938
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 13.00359845161438,
            "unit": "%",
            "range": 9.53506605840616
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0023357390891760588,
            "unit": "s",
            "range": 0.001456180470995605
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 63.06410607785544,
            "unit": "W",
            "range": 5.387272989592933
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 84.2636035598687,
            "unit": "%",
            "range": 10.719480899531352
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 13.012415456771851,
            "unit": "%",
            "range": 9.530379568320612
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 17.177978515625,
            "unit": "s",
            "range": 2.373276710510254
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.1444756595603516,
            "unit": "kJ",
            "range": 0.13021456541378493
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6313948631286621,
            "unit": "s",
            "range": 0.08588854223489761
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 7.412607712553855,
            "unit": "W",
            "range": 0.19622394816154143
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 86.01966604684493,
            "unit": "%",
            "range": 0.8596515031654445
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5646711587905884,
            "unit": "s",
            "range": 0.08089771121740341
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 7.369397775754699,
            "unit": "W",
            "range": 0.18869941056224163
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 86.1643471377497,
            "unit": "%",
            "range": 1.7987574409873504
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.1656222343444824,
            "unit": "s",
            "range": 0.20928560197353363
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 45.33021874829859,
            "unit": "W",
            "range": 4.9267133728225545
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 86.76963018576832,
            "unit": "%",
            "range": 2.2273181912077713
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.15946102142334,
            "unit": "s",
            "range": 0.2324988842010498
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 48.19881129882677,
            "unit": "W",
            "range": 6.040981436425123
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 86.58854973773354,
            "unit": "%",
            "range": 1.6246625439279827
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.104245901107788,
            "unit": "s",
            "range": 0.09837014973163605
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 11.978515353031156,
            "unit": "W",
            "range": 13.758515611932443
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 86.87014887201367,
            "unit": "%",
            "range": 1.5448965341767331
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.20097680389881134,
            "unit": "s",
            "range": 0.02297055535018444
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 7.391524541544397,
            "unit": "W",
            "range": 0.15614104069086598
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 87.28647944200418,
            "unit": "%",
            "range": 2.2214016014894358
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.23412445187568665,
            "unit": "s",
            "range": 0.010748565196990967
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 7.390985739073029,
            "unit": "W",
            "range": 0.15978005697103514
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 87.2767010722392,
            "unit": "%",
            "range": 2.170715255019728
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.5279592275619507,
            "unit": "s",
            "range": 0.1053532212972641
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 27.64076306429023,
            "unit": "W",
            "range": 20.445737894252684
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 87.0653734046237,
            "unit": "%",
            "range": 1.1350930740838434
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.9887654781341553,
            "unit": "s",
            "range": 0.26524072885513306
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 33.747737989093636,
            "unit": "W",
            "range": 14.889222348543079
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 86.39095788639096,
            "unit": "%",
            "range": 0.9360873504091776
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.012873888015747,
            "unit": "s",
            "range": 0.31387755274772644
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 39.688844438230596,
            "unit": "W",
            "range": 3.136786814419397
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 86.39102692725605,
            "unit": "%",
            "range": 0.6777463737252486
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6329011917114258,
            "unit": "s",
            "range": 0.05385395139455795
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 7.3957806006301965,
            "unit": "W",
            "range": 0.15711221530559782
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 87.27421274662436,
            "unit": "%",
            "range": 1.9488984006933032
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6528480648994446,
            "unit": "s",
            "range": 0.05183364078402519
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 13.57049355004192,
            "unit": "W",
            "range": 9.940991399571566
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 86.98106273700621,
            "unit": "%",
            "range": 1.1816319181165684
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]",
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "12e726c5130f37bf0dd1b208c0448fa38a8920ab",
          "message": "[pre-commit.ci] pre-commit autoupdate (#1253)\n\nupdates:\r\n- [github.com/psf/black-pre-commit-mirror: 23.9.1 → 23.10.0](https://github.com/psf/black-pre-commit-mirror/compare/23.9.1...23.10.0)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-24T09:06:47Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/12e726c5130f37bf0dd1b208c0448fa38a8920ab"
        },
        "date": 1698141676341,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 56.0419921875,
            "unit": "s",
            "range": 5.172030925750732
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 6.944464103257813,
            "unit": "kJ",
            "range": 0.5396219689558927
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.005200431682169437,
            "unit": "s",
            "range": 0.011415564455091953
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 56.77796474911288,
            "unit": "W",
            "range": 9.112615542232525
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 94.36607777700856,
            "unit": "%",
            "range": 3.427892882390421
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 25.167470598220824,
            "unit": "%",
            "range": 24.43049766449609
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003261517849750817,
            "unit": "s",
            "range": 0.00005326932659954764
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 56.83474688262887,
            "unit": "W",
            "range": 8.82423989713837
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 94.31997816242973,
            "unit": "%",
            "range": 3.3797576812233454
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 25.17693200111389,
            "unit": "%",
            "range": 24.423596098416322
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.37377071380615234,
            "unit": "s",
            "range": 0.09529932588338852
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 57.578860612994944,
            "unit": "W",
            "range": 7.685212946092408
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 94.0031421876553,
            "unit": "%",
            "range": 3.3511869075692853
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 25.234443712234498,
            "unit": "%",
            "range": 24.382313368868218
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.34535354375839233,
            "unit": "s",
            "range": 0.09676490724086761
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 58.36484538185364,
            "unit": "W",
            "range": 7.337955626071203
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 93.45143736689742,
            "unit": "%",
            "range": 4.108753093962885
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 25.32238988876343,
            "unit": "%",
            "range": 24.32141582944367
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.704674482345581,
            "unit": "s",
            "range": 0.10164669156074524
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 56.82753273003671,
            "unit": "W",
            "range": 3.1191969141896285
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 92.9469987450301,
            "unit": "%",
            "range": 5.533436919018961
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 25.34088134765625,
            "unit": "%",
            "range": 24.308956521754133
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09487386792898178,
            "unit": "s",
            "range": 0.025371620431542397
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 56.186634766850055,
            "unit": "W",
            "range": 2.1615326538923973
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 92.69497142073716,
            "unit": "%",
            "range": 6.013838620140688
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 25.34094648361206,
            "unit": "%",
            "range": 24.30891284644784
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.15772941708564758,
            "unit": "s",
            "range": 0.014095364138484001
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 56.11216825656182,
            "unit": "W",
            "range": 2.187232545042496
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 92.63018131439522,
            "unit": "%",
            "range": 6.046390627970983
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 25.34117889404297,
            "unit": "%",
            "range": 24.308757021535946
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.762906074523926,
            "unit": "s",
            "range": 0.9808221459388733
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 114.69853589387836,
            "unit": "W",
            "range": 5.958402024613712
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 91.40583587470971,
            "unit": "%",
            "range": 6.55255949060587
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 25.342952156066893,
            "unit": "%",
            "range": 24.307568722814416
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 22.14504051208496,
            "unit": "s",
            "range": 2.4116172790527344
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 121.54450169986596,
            "unit": "W",
            "range": 5.725638591778765
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 93.51608263968006,
            "unit": "%",
            "range": 6.347452383754437
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 27.729104232788085,
            "unit": "%",
            "range": 24.332461619263132
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 22.89564323425293,
            "unit": "s",
            "range": 2.0901992321014404
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 122.07206233256302,
            "unit": "W",
            "range": 5.849154503954679
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 94.13356876176799,
            "unit": "%",
            "range": 5.920356290804075
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 27.862491035461424,
            "unit": "%",
            "range": 24.170106395165355
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004791259707417339,
            "unit": "s",
            "range": 0.00006372257485054433
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 67.4619744898709,
            "unit": "W",
            "range": 3.103274476068767
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 94.10487188343605,
            "unit": "%",
            "range": 5.916543421175188
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 25.23696823120117,
            "unit": "%",
            "range": 24.379135673210364
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0017322540516033769,
            "unit": "s",
            "range": 0.000669553701300174
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 67.57977027227363,
            "unit": "W",
            "range": 3.136628105731445
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 94.10708758761977,
            "unit": "%",
            "range": 5.914423757476224
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 25.238387680053712,
            "unit": "%",
            "range": 24.378524861810426
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 17.596025466918945,
            "unit": "s",
            "range": 2.212853193283081
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.5578305620353516,
            "unit": "kJ",
            "range": 0.27333065903935055
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6601295471191406,
            "unit": "s",
            "range": 0.10448018461465836
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 17.757714354545513,
            "unit": "W",
            "range": 14.611166346698045
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 99.61439379202825,
            "unit": "%",
            "range": 0.5286954100499663
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 4.37042236328125,
            "unit": "%",
            "range": 0.19775390625
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.6144536733627319,
            "unit": "s",
            "range": 0.12759536504745483
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 19.395336797144477,
            "unit": "W",
            "range": 16.3018846944892
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 99.59154903570064,
            "unit": "%",
            "range": 0.7429260176641267
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 4.370542132854462,
            "unit": "%",
            "range": 0.19811321496963502
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.273616313934326,
            "unit": "s",
            "range": 0.3490809202194214
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 66.18924065110937,
            "unit": "W",
            "range": 13.803401694557506
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 99.7441204442125,
            "unit": "%",
            "range": 0.33473541133399365
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 4.1593032598495485,
            "unit": "%",
            "range": 0.704252233604667
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.292482376098633,
            "unit": "s",
            "range": 0.2837070822715759
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 63.018573523991655,
            "unit": "W",
            "range": 16.316468408349532
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 99.75591520705103,
            "unit": "%",
            "range": 0.38039251264841534
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 4.056448090076446,
            "unit": "%",
            "range": 1.1409428392810528
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.1932096481323242,
            "unit": "s",
            "range": 0.1471075862646103
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 31.724339804015074,
            "unit": "W",
            "range": 31.406107647174796
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 99.81876768254627,
            "unit": "%",
            "range": 0.2869265761267671
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 4.086376333236695,
            "unit": "%",
            "range": 1.1621096510586144
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.22682413458824158,
            "unit": "s",
            "range": 0.024536894634366035
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 16.046084041606104,
            "unit": "W",
            "range": 14.509981613473823
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 99.7771862418451,
            "unit": "%",
            "range": 0.3280161173042802
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 4.085118508338928,
            "unit": "%",
            "range": 1.1610559453075369
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.25237876176834106,
            "unit": "s",
            "range": 0.027120351791381836
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 16.039307576188733,
            "unit": "W",
            "range": 14.513333895325834
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 99.75831259268193,
            "unit": "%",
            "range": 0.36258695912392835
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 4.081783807277679,
            "unit": "%",
            "range": 1.1583172565574427
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.6262890100479126,
            "unit": "s",
            "range": 0.11959648132324219
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 42.41073024644311,
            "unit": "W",
            "range": 25.334732388549806
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 99.81758629019131,
            "unit": "%",
            "range": 0.2892422129303871
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 4.077018165588379,
            "unit": "%",
            "range": 1.154542574243201
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.937734603881836,
            "unit": "s",
            "range": 0.1821063905954361
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 54.301266181654796,
            "unit": "W",
            "range": 17.10287316655518
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 99.90311909991993,
            "unit": "%",
            "range": 0.18515699105188282
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 4.072421801090241,
            "unit": "%",
            "range": 1.1510584819876077
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.8796418905258179,
            "unit": "s",
            "range": 0.2209406942129135
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 46.47788547830176,
            "unit": "W",
            "range": 18.75791727802706
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 99.85643663436313,
            "unit": "%",
            "range": 0.2634432893471818
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 4.044230580329895,
            "unit": "%",
            "range": 1.1331308777952003
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6391882300376892,
            "unit": "s",
            "range": 0.07034479081630707
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 15.886667019444072,
            "unit": "W",
            "range": 14.669458440892987
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 99.73464283175045,
            "unit": "%",
            "range": 0.4592028370500035
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 4.0628767848014835,
            "unit": "%",
            "range": 1.1443202833836257
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6684421300888062,
            "unit": "s",
            "range": 0.0689895749092102
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 20.0028277975308,
            "unit": "W",
            "range": 21.51395344923657
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 99.65495291749328,
            "unit": "%",
            "range": 0.6416072032544541
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 4.017896413803101,
            "unit": "%",
            "range": 1.1218983873577084
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "41a3d0b4f2ff9764c955457f1c7bb99bc5caf420",
          "message": "Merge pull request #1247 from helmholtz-analytics/features/1246-Continuous_Benchmarking_for_Preprocessing_Module\n\nContinuous Benchmarking for the Preprocessing Module",
          "timestamp": "2023-10-30T09:01:58Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/41a3d0b4f2ff9764c955457f1c7bb99bc5caf420"
        },
        "date": 1698658927828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 133.5355224609375,
            "unit": "s",
            "range": 13.20767879486084
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 11.738984408875,
            "unit": "kJ",
            "range": 1.8949793293944155
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.002826627343893051,
            "unit": "s",
            "range": 0.007069915998727083
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 52.690693040151494,
            "unit": "W",
            "range": 4.3942640577256835
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 30.5449128110245,
            "unit": "%",
            "range": 4.826513218981029
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 9.917319345474244,
            "unit": "%",
            "range": 3.0062746600008516
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00027581973699852824,
            "unit": "s",
            "range": 0.00010914278391283005
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 52.795842476996334,
            "unit": "W",
            "range": 4.388122020592237
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 30.29906999284392,
            "unit": "%",
            "range": 4.967422191213797
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 9.92674207687378,
            "unit": "%",
            "range": 2.992918235103289
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3121227025985718,
            "unit": "s",
            "range": 0.14770343899726868
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 53.70086659224935,
            "unit": "W",
            "range": 5.0039660653634295
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 29.11249227209246,
            "unit": "%",
            "range": 5.753464293678634
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 10.05728464126587,
            "unit": "%",
            "range": 2.830532093543322
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.32997965812683105,
            "unit": "s",
            "range": 0.08155371248722076
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.16822075402225,
            "unit": "W",
            "range": 4.5755120568653584
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 27.14597706068098,
            "unit": "%",
            "range": 7.6650393035628115
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 10.11871337890625,
            "unit": "%",
            "range": 2.7700282351745247
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7216046452522278,
            "unit": "s",
            "range": 0.1836388111114502
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 54.22476517791618,
            "unit": "W",
            "range": 3.3156188772236415
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 23.951675318556468,
            "unit": "%",
            "range": 11.134566488929543
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 10.140199375152587,
            "unit": "%",
            "range": 2.7829340966980953
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09937585890293121,
            "unit": "s",
            "range": 0.04935043677687645
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 54.3450197991693,
            "unit": "W",
            "range": 3.055779400422701
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 22.5810249465729,
            "unit": "%",
            "range": 12.348866541968354
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 10.190511178970336,
            "unit": "%",
            "range": 2.8185275345314227
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.17905917763710022,
            "unit": "s",
            "range": 0.031190382316708565
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 54.367038218117,
            "unit": "W",
            "range": 2.996439843302916
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 22.4798205768521,
            "unit": "%",
            "range": 12.514956167862179
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 10.204485273361206,
            "unit": "%",
            "range": 2.829224895731101
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.748167037963867,
            "unit": "s",
            "range": 1.9475271701812744
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 84.14277194066406,
            "unit": "W",
            "range": 5.556761831066469
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 20.937167662418677,
            "unit": "%",
            "range": 13.545771831687153
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 10.050528240203857,
            "unit": "%",
            "range": 2.829460804449943
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 24.12401580810547,
            "unit": "s",
            "range": 3.419316530227661
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 85.58437852766511,
            "unit": "W",
            "range": 6.444953511829933
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 20.288771599441887,
            "unit": "%",
            "range": 14.259053934783934
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 13.43554458618164,
            "unit": "%",
            "range": 11.90408987486301
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.559988021850586,
            "unit": "s",
            "range": 3.049999713897705
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 86.7680808513305,
            "unit": "W",
            "range": 8.709956316196484
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 20.45259129045345,
            "unit": "%",
            "range": 14.597217540498937
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 16.32896327972412,
            "unit": "%",
            "range": 19.253977979167683
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005554199451580644,
            "unit": "s",
            "range": 0.00021713101887144148
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 54.13857345104859,
            "unit": "W",
            "range": 5.250303148377138
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 20.719740968767564,
            "unit": "%",
            "range": 14.859901136759987
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 16.492497825622557,
            "unit": "%",
            "range": 19.254916195615262
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0018714905017986894,
            "unit": "s",
            "range": 0.0012146851513534784
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 54.13684230745851,
            "unit": "W",
            "range": 5.252874623368243
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 20.719091599704818,
            "unit": "%",
            "range": 14.859127796330093
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 16.49416904449463,
            "unit": "%",
            "range": 19.254282157894977
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.008509445004165173,
            "unit": "s",
            "range": 0.003600390860810876
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 54.11377664908478,
            "unit": "W",
            "range": 5.2310215826120965
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 20.715635879060507,
            "unit": "%",
            "range": 14.854999748138493
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.500958728790284,
            "unit": "%",
            "range": 19.25171945717011
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.00438690185546875,
            "unit": "s",
            "range": 0.0016853469423949718
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 54.09427061983388,
            "unit": "W",
            "range": 5.209898120721583
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 20.71346131945424,
            "unit": "%",
            "range": 14.852492320431237
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.50606517791748,
            "unit": "%",
            "range": 19.24980605325527
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.001766204833984375,
            "unit": "s",
            "range": 0.0006845697062090039
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 54.08531619978836,
            "unit": "W",
            "range": 5.19904343102162
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 20.71227486585129,
            "unit": "%",
            "range": 14.851109496845057
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.50796127319336,
            "unit": "%",
            "range": 19.249098635436372
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 73.75300598144531,
            "unit": "s",
            "range": 8.32780647277832
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 87.0600278124558,
            "unit": "W",
            "range": 7.853087636519271
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 19.84407430054735,
            "unit": "%",
            "range": 13.29813843111028
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.80238265991211,
            "unit": "%",
            "range": 14.623867793636089
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0017768859397619963,
            "unit": "s",
            "range": 0.00042013588245026767
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.79021664376744,
            "unit": "W",
            "range": 3.7167548806818607
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 22.18165789164714,
            "unit": "%",
            "range": 12.960497848703039
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 10.16387939453125,
            "unit": "%",
            "range": 2.732625128907833
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 27.037500381469727,
            "unit": "s",
            "range": 2.0547704696655273
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.6259159928230469,
            "unit": "kJ",
            "range": 0.33113004159162285
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5461366772651672,
            "unit": "s",
            "range": 0.08843731880187988
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 13.962955155978255,
            "unit": "W",
            "range": 13.153467204040295
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 38.846021986205045,
            "unit": "%",
            "range": 1.9771520135881666
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5783587694168091,
            "unit": "s",
            "range": 0.06716755777597427
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 13.856110095812042,
            "unit": "W",
            "range": 13.175631541130985
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 39.688440624180565,
            "unit": "%",
            "range": 3.142355682893739
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.1419827938079834,
            "unit": "s",
            "range": 0.14896368980407715
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 42.24110519566612,
            "unit": "W",
            "range": 10.520999046073829
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 40.11671544841744,
            "unit": "%",
            "range": 3.817755180552088
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.165955066680908,
            "unit": "s",
            "range": 0.19765184819698334
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 46.80043999724444,
            "unit": "W",
            "range": 11.739149815720719
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 40.62748314945222,
            "unit": "%",
            "range": 4.564776049154664
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.517134402692318,
            "unit": "%",
            "range": 0.38079948617232495
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 0.9757488965988159,
            "unit": "s",
            "range": 0.22208616137504578
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 22.8577495060689,
            "unit": "W",
            "range": 21.53477647163976
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 40.350834849991024,
            "unit": "%",
            "range": 4.503506926984546
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.5269192695617675,
            "unit": "%",
            "range": 0.4251223332685905
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.1861949861049652,
            "unit": "s",
            "range": 0.032961685210466385
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 17.599754647312125,
            "unit": "W",
            "range": 15.268475165903364
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 40.23052644733599,
            "unit": "%",
            "range": 4.637610747065809
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.54205322265625,
            "unit": "%",
            "range": 0.4153279813546155
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.22522158920764923,
            "unit": "s",
            "range": 0.03670252114534378
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 17.534402871516498,
            "unit": "W",
            "range": 15.2036640052871
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 40.24397971300796,
            "unit": "%",
            "range": 4.660187459704096
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.54205322265625,
            "unit": "%",
            "range": 0.4153279813546155
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.813360571861267,
            "unit": "s",
            "range": 0.3278830945491791
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 33.36912656759287,
            "unit": "W",
            "range": 13.706963124118808
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 40.71036443912345,
            "unit": "%",
            "range": 4.390907671270818
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.54205322265625,
            "unit": "%",
            "range": 0.4153279813546155
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.9186618328094482,
            "unit": "s",
            "range": 0.35648345947265625
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 35.20892757233539,
            "unit": "W",
            "range": 18.787674439443986
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 40.96740455167372,
            "unit": "%",
            "range": 4.007094017140906
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.55059814453125,
            "unit": "%",
            "range": 0.42487483705998413
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.9083011150360107,
            "unit": "s",
            "range": 0.34654751420021057
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 38.42564025839571,
            "unit": "W",
            "range": 17.960466460433484
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 41.09141259789484,
            "unit": "%",
            "range": 4.436963820136435
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.56341552734375,
            "unit": "%",
            "range": 0.4337401443647974
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7836119532585144,
            "unit": "s",
            "range": 0.1740347295999527
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 14.425788477808203,
            "unit": "W",
            "range": 14.21494358626355
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 40.77724112870057,
            "unit": "%",
            "range": 5.080935217284728
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.8850215673446655,
            "unit": "s",
            "range": 0.19750827550888062
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 15.346758025949478,
            "unit": "W",
            "range": 14.025081728616186
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 41.26001132849599,
            "unit": "%",
            "range": 5.3589027328297085
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.03308532387018204,
            "unit": "s",
            "range": 0.01929112896323204
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.459305017965923,
            "unit": "W",
            "range": 14.195186792069697
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 41.5339499136683,
            "unit": "%",
            "range": 5.466640897531594
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.006167459301650524,
            "unit": "s",
            "range": 0.002641417784616351
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.459119116882226,
            "unit": "W",
            "range": 14.195306836252874
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 41.55090518153052,
            "unit": "%",
            "range": 5.4742401341009685
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0023374080192297697,
            "unit": "s",
            "range": 0.0010656103258952498
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.459264583391288,
            "unit": "W",
            "range": 14.195242400157765
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 41.55532604340782,
            "unit": "%",
            "range": 5.475707158805804
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 9.64140510559082,
            "unit": "s",
            "range": 1.1375110149383545
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 55.4603391443124,
            "unit": "W",
            "range": 15.790485191236863
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 41.46164258020212,
            "unit": "%",
            "range": 4.19304483221314
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.7992146849632262,
            "unit": "%",
            "range": 0.6620459319064815
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0032011985313147306,
            "unit": "s",
            "range": 0.0012045662151649594
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 19.035395671698005,
            "unit": "W",
            "range": 17.603954501196373
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 41.592040203656595,
            "unit": "%",
            "range": 4.639177592466284
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 1.84234619140625,
            "unit": "%",
            "range": 0.8868733745987496
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eb8ce2d52763501edbcd7bd53ef1d9f2653e30ae",
          "message": "Merge pull request #1255 from helmholtz-analytics/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2023-11-02T08:41:51Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/eb8ce2d52763501edbcd7bd53ef1d9f2653e30ae"
        },
        "date": 1698916995273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 129.83836364746094,
            "unit": "s",
            "range": 47.53559494018555
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 13.008997350771875,
            "unit": "kJ",
            "range": 4.589270889896554
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0027864642906934023,
            "unit": "s",
            "range": 0.006810166407376528
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 51.7174790588507,
            "unit": "W",
            "range": 3.5691561402998726
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 52.59144080277125,
            "unit": "%",
            "range": 4.524754115149627
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 58.21947889328003,
            "unit": "%",
            "range": 41.89849387137147
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003494147094897926,
            "unit": "s",
            "range": 0.0001507057750131935
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 51.881104369497145,
            "unit": "W",
            "range": 3.4512943114884895
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 52.74731973974151,
            "unit": "%",
            "range": 4.515215000213886
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 58.22919921875,
            "unit": "%",
            "range": 41.88716289661563
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3876628577709198,
            "unit": "s",
            "range": 0.24321995675563812
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 52.59217432802158,
            "unit": "W",
            "range": 3.220453311752354
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 53.59234109753628,
            "unit": "%",
            "range": 4.54257658782523
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 58.264912128448486,
            "unit": "%",
            "range": 41.84574280593665
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.3683726191520691,
            "unit": "s",
            "range": 0.2000824213027954
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 53.7632629999271,
            "unit": "W",
            "range": 3.8316411541469924
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 54.902341023520265,
            "unit": "%",
            "range": 4.686658831393235
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 58.29082336425781,
            "unit": "%",
            "range": 41.816224819339055
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6628831624984741,
            "unit": "s",
            "range": 0.3144061267375946
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 55.847855017556626,
            "unit": "W",
            "range": 6.444860714941346
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 56.510896427337535,
            "unit": "%",
            "range": 4.933863714376377
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 58.29527683258057,
            "unit": "%",
            "range": 41.811767783681674
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10877921432256699,
            "unit": "s",
            "range": 0.05491328611969948
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 57.970518414320495,
            "unit": "W",
            "range": 9.466926446625376
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 57.27467664022987,
            "unit": "%",
            "range": 5.174588443784424
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 58.299003219604494,
            "unit": "%",
            "range": 41.807609578976866
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.16874012351036072,
            "unit": "s",
            "range": 0.05513688176870346
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 57.638114209682236,
            "unit": "W",
            "range": 8.39782179826233
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 57.363518494569256,
            "unit": "%",
            "range": 5.228174175251603
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 58.299334812164304,
            "unit": "%",
            "range": 41.80722386931518
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.925525665283203,
            "unit": "s",
            "range": 3.535773515701294
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 93.4012369488468,
            "unit": "W",
            "range": 4.596502988894146
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 57.625430823928944,
            "unit": "%",
            "range": 5.425909541471984
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 58.34171228408813,
            "unit": "%",
            "range": 41.7609713597362
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 25.539897918701172,
            "unit": "s",
            "range": 10.141314506530762
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 96.89576683369363,
            "unit": "W",
            "range": 5.89015022446082
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 57.954665010646885,
            "unit": "%",
            "range": 5.1516638147328
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 58.3996997833252,
            "unit": "%",
            "range": 41.69650533513998
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.6450138092041,
            "unit": "s",
            "range": 9.85472297668457
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 96.80517173383433,
            "unit": "W",
            "range": 3.344221032605015
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 58.310383978431105,
            "unit": "%",
            "range": 5.504882971537928
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 58.05318489074707,
            "unit": "%",
            "range": 42.06649565185872
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0006111144903115928,
            "unit": "s",
            "range": 0.00025015108985826373
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 51.379809956206984,
            "unit": "W",
            "range": 2.5393211585483555
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 57.962011436435866,
            "unit": "%",
            "range": 5.5618428278025736
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 58.27696208953857,
            "unit": "%",
            "range": 41.849407217043755
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.00203704833984375,
            "unit": "s",
            "range": 0.001446421374566853
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 51.37802620632095,
            "unit": "W",
            "range": 2.53756525882821
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 57.96181297856923,
            "unit": "%",
            "range": 5.561996326160167
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 58.278978538513186,
            "unit": "%",
            "range": 41.84738917962248
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.01005401648581028,
            "unit": "s",
            "range": 0.010638974606990814
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.37950258695763,
            "unit": "W",
            "range": 2.538663703269962
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 57.95991502640267,
            "unit": "%",
            "range": 5.562839277230531
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 58.30058164596558,
            "unit": "%",
            "range": 41.825812863886796
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0041904449462890625,
            "unit": "s",
            "range": 0.002654004143550992
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.41714640904348,
            "unit": "W",
            "range": 2.577688770092211
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 57.959051124552765,
            "unit": "%",
            "range": 5.563128831765768
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 58.329760265350345,
            "unit": "%",
            "range": 41.79650582920364
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0015495300758630037,
            "unit": "s",
            "range": 0.0009745276183821261
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.438369995247626,
            "unit": "W",
            "range": 2.6019682009732916
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 57.95858977057418,
            "unit": "%",
            "range": 5.563276579344736
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 58.342374324798584,
            "unit": "%",
            "range": 41.783897967667784
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 69.36087799072266,
            "unit": "s",
            "range": 26.487882614135742
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 101.16617703330658,
            "unit": "W",
            "range": 4.582509540208149
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 58.81642732524275,
            "unit": "%",
            "range": 4.513034328723167
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 64.65443725585938,
            "unit": "%",
            "range": 36.61842170066588
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.000904083251953125,
            "unit": "s",
            "range": 0.00043548073153942823
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.28791290551277,
            "unit": "W",
            "range": 2.6852788281806235
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 56.595901626932914,
            "unit": "%",
            "range": 6.112141547743452
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 67.32330322265625,
            "unit": "%",
            "range": 40.0527708265764
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 26.164209365844727,
            "unit": "s",
            "range": 0.9964683651924133
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.6739155371254881,
            "unit": "kJ",
            "range": 0.33090129777893645
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5532317161560059,
            "unit": "s",
            "range": 0.08176116645336151
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 16.01763289310089,
            "unit": "W",
            "range": 14.301688498907879
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 40.328659647761185,
            "unit": "%",
            "range": 3.356980626905244
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 2.35992431640625,
            "unit": "%",
            "range": 0.9138501890704611
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5385528802871704,
            "unit": "s",
            "range": 0.08470291644334793
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 17.889894249689565,
            "unit": "W",
            "range": 15.988193033255506
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 41.98419868923515,
            "unit": "%",
            "range": 5.5897277017416185
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 2.3513200640678407,
            "unit": "%",
            "range": 0.922984524869148
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.2084388732910156,
            "unit": "s",
            "range": 0.25429442524909973
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 48.32494496572447,
            "unit": "W",
            "range": 16.74314453904258
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 42.68719042006903,
            "unit": "%",
            "range": 6.132071664080204
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 2.372331091761589,
            "unit": "%",
            "range": 0.9018176683366833
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.116178512573242,
            "unit": "s",
            "range": 0.22127816081047058
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 55.66852340025603,
            "unit": "W",
            "range": 18.083269821116403
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 43.37170642006738,
            "unit": "%",
            "range": 7.054373996088294
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 2.403681901097298,
            "unit": "%",
            "range": 0.7213404965863545
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.11273992061615,
            "unit": "s",
            "range": 0.13750968873500824
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 31.25135972108999,
            "unit": "W",
            "range": 23.181266908034786
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 43.6962608297372,
            "unit": "%",
            "range": 7.848919580515712
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 2.3906422048807143,
            "unit": "%",
            "range": 0.6023729076671546
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.19599983096122742,
            "unit": "s",
            "range": 0.02596653252840042
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 22.357786015997196,
            "unit": "W",
            "range": 15.94193658832038
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 43.439812157820676,
            "unit": "%",
            "range": 7.594286553257436
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 2.40094251036644,
            "unit": "%",
            "range": 0.5947541652387821
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.24324791133403778,
            "unit": "s",
            "range": 0.04093039780855179
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 21.57076938162826,
            "unit": "W",
            "range": 15.884886074315402
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 43.2691979470023,
            "unit": "%",
            "range": 7.375099070190416
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 2.4048694133758546,
            "unit": "%",
            "range": 0.5922126940151758
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.6656110286712646,
            "unit": "s",
            "range": 0.22024041414260864
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 32.63541904713635,
            "unit": "W",
            "range": 20.172807656081627
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 43.415804750754795,
            "unit": "%",
            "range": 7.3324779370438185
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 2.4189475536346436,
            "unit": "%",
            "range": 0.5835612329916485
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.795835256576538,
            "unit": "s",
            "range": 0.31111693382263184
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 40.209359015009895,
            "unit": "W",
            "range": 19.003959934314466
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 43.88092363949019,
            "unit": "%",
            "range": 7.028573041576609
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 2.4346450567245483,
            "unit": "%",
            "range": 0.5763195516224393
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.8727916479110718,
            "unit": "s",
            "range": 0.2315760850906372
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 35.367884036527236,
            "unit": "W",
            "range": 10.836628384918667
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 43.35562300135896,
            "unit": "%",
            "range": 6.830850107215261
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 2.5357864677906035,
            "unit": "%",
            "range": 0.6109688039328998
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7759203314781189,
            "unit": "s",
            "range": 0.17017680406570435
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 15.040711743385524,
            "unit": "W",
            "range": 14.070983382875582
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 42.77976728122776,
            "unit": "%",
            "range": 6.5175775785163514
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 2.55889892578125,
            "unit": "%",
            "range": 0.6355163829501541
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7492052912712097,
            "unit": "s",
            "range": 0.20841075479984283
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 17.54725019248814,
            "unit": "W",
            "range": 15.617738208424958
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 42.23732272502171,
            "unit": "%",
            "range": 6.10268779964272
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 2.5582901537418365,
            "unit": "%",
            "range": 0.635916454246656
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.027085090056061745,
            "unit": "s",
            "range": 0.009755516424775124
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.030882188656985,
            "unit": "W",
            "range": 16.236585454950838
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 42.271582592398374,
            "unit": "%",
            "range": 6.187232927995789
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.555524641275406,
            "unit": "%",
            "range": 0.6377965701673316
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0067116739228367805,
            "unit": "s",
            "range": 0.0026351187843829393
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.032973260668744,
            "unit": "W",
            "range": 16.23564750701751
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 42.28821033878813,
            "unit": "%",
            "range": 6.199067070404687
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.5549389898777006,
            "unit": "%",
            "range": 0.6382078493713683
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0022271634079515934,
            "unit": "s",
            "range": 0.0009312790934927762
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.033600057719067,
            "unit": "W",
            "range": 16.235388087676526
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 42.29235500854695,
            "unit": "%",
            "range": 6.201752788908724
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.554758441448212,
            "unit": "%",
            "range": 0.638335562979548
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 9.019195556640625,
            "unit": "s",
            "range": 1.0561060905456543
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 58.216698043288645,
            "unit": "W",
            "range": 13.931874970577054
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 44.22059471409088,
            "unit": "%",
            "range": 7.229884775554568
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.5903586000204086,
            "unit": "%",
            "range": 0.724779333606855
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.003252649214118719,
            "unit": "s",
            "range": 0.0013253622455522418
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 18.631751666619362,
            "unit": "W",
            "range": 17.190471136206096
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 44.75123797534805,
            "unit": "%",
            "range": 7.974619674334715
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 2.63458251953125,
            "unit": "%",
            "range": 0.777249584532854
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarnawa",
            "username": "mtar",
            "email": "m.tarnawa@fz-juelich.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f62e2b116d7a361ffb105c256167fd89a9cf63ff",
          "message": "Binary special methods return NotImplemented (#1191)\n\n* return NotImplemented on DNDarray methods\r\n\r\n* fix bug lshift\r\n\r\n* fix some bugs\r\n\r\n* add out/where params for binary functions\r\n\r\n* add reflective tests & out,where\r\n\r\n* test NotImplemented\r\n\r\n* add missing tests for truediv and matmul\r\n\r\n* fix test divmod\r\n\r\n* rearange checks divmod out\r\n\r\n* tests in divmod and sub\r\n\r\n* fix brackets in divmod test\r\n\r\n* revert changes *shift for older pytorch versions\r\n\r\n* add out, where parameters\r\n\r\n* update examples output from scalar inputs\r\n\r\n---------\r\n\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-11-02T10:20:11Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/f62e2b116d7a361ffb105c256167fd89a9cf63ff"
        },
        "date": 1698922047879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 108.01377868652344,
            "unit": "s",
            "range": 30.156522750854492
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 9.874951318065625,
            "unit": "kJ",
            "range": 3.3233815817060637
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0067227683030068874,
            "unit": "s",
            "range": 0.01882530376315117
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 51.0324760482137,
            "unit": "W",
            "range": 3.6868025092692833
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 29.86102589557815,
            "unit": "%",
            "range": 3.0034222104213852
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 15.753254079818726,
            "unit": "%",
            "range": 19.6577057301684
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0002643521875143051,
            "unit": "s",
            "range": 0.00011727551463991404
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 51.268619064277765,
            "unit": "W",
            "range": 3.779833646530589
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 29.66620326435421,
            "unit": "%",
            "range": 3.2973679602579398
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 15.760640692710876,
            "unit": "%",
            "range": 19.638488451616226
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3167341351509094,
            "unit": "s",
            "range": 0.07923713326454163
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 52.49813404288085,
            "unit": "W",
            "range": 4.754799850363421
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 28.59129403815451,
            "unit": "%",
            "range": 5.021080528106459
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 15.793941235542297,
            "unit": "%",
            "range": 19.541047540663385
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.2930155396461487,
            "unit": "s",
            "range": 0.09834259003400803
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.83650193203003,
            "unit": "W",
            "range": 7.9442997762768455
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 26.792513708808208,
            "unit": "%",
            "range": 8.19645109022055
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 15.84324517250061,
            "unit": "%",
            "range": 19.397639250330606
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6145749688148499,
            "unit": "s",
            "range": 0.19418157637119293
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 54.65432810352745,
            "unit": "W",
            "range": 5.451012157270934
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 24.451261561176427,
            "unit": "%",
            "range": 12.350551559398122
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 15.77844696044922,
            "unit": "%",
            "range": 19.149365802229273
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09816799312829971,
            "unit": "s",
            "range": 0.04028841853141785
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 54.51207873437181,
            "unit": "W",
            "range": 4.836738475977505
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 23.473189311039803,
            "unit": "%",
            "range": 14.020212034915582
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 15.468135595321655,
            "unit": "%",
            "range": 17.852656919646385
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.15483209490776062,
            "unit": "s",
            "range": 0.03232746198773384
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 54.57605582190378,
            "unit": "W",
            "range": 4.6461668371469225
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 23.354665926646604,
            "unit": "%",
            "range": 14.086497868926985
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 14.718654584884643,
            "unit": "%",
            "range": 15.47408842235912
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 7.955965995788574,
            "unit": "s",
            "range": 1.8409931659698486
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 84.66515883255798,
            "unit": "W",
            "range": 7.195128860609002
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 22.087863678707244,
            "unit": "%",
            "range": 13.9250231690678
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 10.281918048858643,
            "unit": "%",
            "range": 3.0643427268495222
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 19.123666763305664,
            "unit": "s",
            "range": 5.288773536682129
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 87.14830566554852,
            "unit": "W",
            "range": 6.0413646052475745
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 20.69583011660871,
            "unit": "%",
            "range": 13.015592875802083
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 9.937848758697509,
            "unit": "%",
            "range": 2.821627937171418
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 18.614673614501953,
            "unit": "s",
            "range": 4.445500373840332
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 88.27665563411384,
            "unit": "W",
            "range": 7.910721940726612
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 19.22381529794018,
            "unit": "%",
            "range": 12.764383029810428
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 12.695399141311645,
            "unit": "%",
            "range": 10.268329710853722
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0003459930303506553,
            "unit": "s",
            "range": 0.0001949683646671474
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 53.073834855231475,
            "unit": "W",
            "range": 3.8320719997490476
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 18.687646685385296,
            "unit": "%",
            "range": 12.63292783420046
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 16.359524726867676,
            "unit": "%",
            "range": 18.913696292994928
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0011772155994549394,
            "unit": "s",
            "range": 0.000630878028459847
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 53.073875029609965,
            "unit": "W",
            "range": 3.8319649068636226
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 18.687823299011264,
            "unit": "%",
            "range": 12.63314424848075
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 16.36017837524414,
            "unit": "%",
            "range": 18.913618768403452
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.00554656982421875,
            "unit": "s",
            "range": 0.0035510300658643246
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.07445376187394,
            "unit": "W",
            "range": 3.831178765949082
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 18.689878365921285,
            "unit": "%",
            "range": 12.635992424064407
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.366470718383788,
            "unit": "%",
            "range": 18.912716157204333
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0025634765625,
            "unit": "s",
            "range": 0.0014024624833837152
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.075127228126824,
            "unit": "W",
            "range": 3.831427969296375
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 18.69094546813009,
            "unit": "%",
            "range": 12.637388896041605
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.370084476470947,
            "unit": "%",
            "range": 18.911919370565883
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0010295867687091231,
            "unit": "s",
            "range": 0.000560865446459502
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.07529169597548,
            "unit": "W",
            "range": 3.8313871131986437
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 18.691386779021165,
            "unit": "%",
            "range": 12.637955661141095
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.370846557617188,
            "unit": "%",
            "range": 18.911846291868343
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 60.25849533081055,
            "unit": "s",
            "range": 19.800928115844727
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 89.6181407171085,
            "unit": "W",
            "range": 6.885603004312048
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 19.585546957003512,
            "unit": "%",
            "range": 13.084490516475773
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 18.069038772583006,
            "unit": "%",
            "range": 19.25263448044398
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.001194000244140625,
            "unit": "s",
            "range": 0.0006252590101212263
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 52.133880095005324,
            "unit": "W",
            "range": 4.269480333993926
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 20.6181104672427,
            "unit": "%",
            "range": 13.555810233280733
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 16.36993408203125,
            "unit": "%",
            "range": 19.314312025818715
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 23.457292556762695,
            "unit": "s",
            "range": 1.5700149536132812
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.3904972123470702,
            "unit": "kJ",
            "range": 0.23793741205854788
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5910912752151489,
            "unit": "s",
            "range": 0.07917385548353195
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 15.16920833060787,
            "unit": "W",
            "range": 14.425753750787655
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 33.19475152584924,
            "unit": "%",
            "range": 1.8098592882034263
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.522527277469635,
            "unit": "s",
            "range": 0.08702366054058075
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 15.087244656393315,
            "unit": "W",
            "range": 14.460053735800903
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 34.46695675152772,
            "unit": "%",
            "range": 3.184958398576469
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.108205795288086,
            "unit": "s",
            "range": 0.25352928042411804
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 45.43644207818947,
            "unit": "W",
            "range": 13.942282034548901
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 33.88044315396372,
            "unit": "%",
            "range": 2.794629481981068
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 2.99984073638916,
            "unit": "s",
            "range": 0.30142632126808167
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 46.4600892734125,
            "unit": "W",
            "range": 13.754500911428583
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 33.2251506321747,
            "unit": "%",
            "range": 2.9710885121972814
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.42779541015625,
            "unit": "%",
            "range": 0.4556740064390282
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 0.8604106903076172,
            "unit": "s",
            "range": 0.254982590675354
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 17.72646587237132,
            "unit": "W",
            "range": 14.951571552339583
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 33.09217236117429,
            "unit": "%",
            "range": 2.8960189911405867
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.4843977030694119
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.17862510681152344,
            "unit": "s",
            "range": 0.026232227683067322
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 14.745957513043788,
            "unit": "W",
            "range": 13.697223174060047
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 33.06591899412389,
            "unit": "%",
            "range": 2.86515475811803
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.4843977030694119
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.21309050917625427,
            "unit": "s",
            "range": 0.04014361649751663
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 14.583440028974527,
            "unit": "W",
            "range": 13.459654525816186
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 33.07785777015692,
            "unit": "%",
            "range": 2.859614391018903
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.4843977030694119
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.4000022411346436,
            "unit": "s",
            "range": 0.2545713186264038
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 20.959818545281287,
            "unit": "W",
            "range": 15.087296914117841
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 33.22715661724216,
            "unit": "%",
            "range": 2.835390256459625
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.4960215017199516,
            "unit": "%",
            "range": 0.4586233988758114
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.8671305179595947,
            "unit": "s",
            "range": 0.3452688157558441
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 32.50669340819046,
            "unit": "W",
            "range": 19.037224781875032
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 33.1093159192011,
            "unit": "%",
            "range": 2.908501666925776
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.5478130161762238,
            "unit": "%",
            "range": 0.4263467781124165
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.7437165975570679,
            "unit": "s",
            "range": 0.3439556360244751
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 38.81618125681784,
            "unit": "W",
            "range": 18.356058734029812
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 33.18187658611043,
            "unit": "%",
            "range": 2.8856222233166533
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.559566730260849,
            "unit": "%",
            "range": 0.4355095927001072
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6420451402664185,
            "unit": "s",
            "range": 0.2289348840713501
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 15.273214938624951,
            "unit": "W",
            "range": 14.238998757574393
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 33.44669526831545,
            "unit": "%",
            "range": 3.4200033406864065
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.5630439579486848,
            "unit": "%",
            "range": 0.43389788500121185
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7119285464286804,
            "unit": "s",
            "range": 0.18762952089309692
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 15.199120304256661,
            "unit": "W",
            "range": 14.297041758598306
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 33.7176049894293,
            "unit": "%",
            "range": 3.987495700354047
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.5671527326107024,
            "unit": "%",
            "range": 0.4323102702182413
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.021314572542905807,
            "unit": "s",
            "range": 0.008385983295738697
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.14568792786893,
            "unit": "W",
            "range": 14.326472601453041
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 33.762289581611526,
            "unit": "%",
            "range": 4.1222596149779545
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.005132198333740234,
            "unit": "s",
            "range": 0.0024214861914515495
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.14287228422953,
            "unit": "W",
            "range": 14.327803259027203
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 33.76256855248497,
            "unit": "%",
            "range": 4.124801689056617
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0018399239052087069,
            "unit": "s",
            "range": 0.000848286843392998
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.142181193843172,
            "unit": "W",
            "range": 14.328131463953332
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 33.76261611669841,
            "unit": "%",
            "range": 4.125442173253323
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 7.408896446228027,
            "unit": "s",
            "range": 1.0337640047073364
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 54.9985593130634,
            "unit": "W",
            "range": 14.86761442894249
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 34.00400415503636,
            "unit": "%",
            "range": 3.1792505411058696
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.52447509765625,
            "unit": "%",
            "range": 0.4647478918404292
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0034322738647460938,
            "unit": "s",
            "range": 0.0013182598631829023
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 15.210313777497614,
            "unit": "W",
            "range": 14.408758894722645
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 35.09844068897492,
            "unit": "%",
            "range": 3.1499982030343987
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Björn Hagemeier",
            "username": "bhagemeier",
            "email": "b.hagemeier@fz-juelich.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1263887a86d46603248b7159af98f0521a9f3962",
          "message": "Merge pull request #1178 from helmholtz-analytics/fix/1168-update-docker-image-and-documentation-on-release13x-and-main\n\nSplit release and source dockerfile",
          "timestamp": "2023-11-21T09:54:15Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/1263887a86d46603248b7159af98f0521a9f3962"
        },
        "date": 1700562949768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 121.58943939208984,
            "unit": "s",
            "range": 28.662981033325195
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 11.226921352534374,
            "unit": "kJ",
            "range": 2.8499794037152606
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0037125791423022747,
            "unit": "s",
            "range": 0.009568553417921066
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 50.35265068631746,
            "unit": "W",
            "range": 7.414126903387828
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 27.80283325214047,
            "unit": "%",
            "range": 1.9769321634167238
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 16.31124801635742,
            "unit": "%",
            "range": 19.399372493833674
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0003109727113042027,
            "unit": "s",
            "range": 0.00011485501454444602
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 50.70253453816689,
            "unit": "W",
            "range": 6.9980589535136835
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 27.76292370831875,
            "unit": "%",
            "range": 2.0156135458984954
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 16.3322340965271,
            "unit": "%",
            "range": 19.386044502389385
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3495117425918579,
            "unit": "s",
            "range": 0.12731018662452698
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 52.634824505127064,
            "unit": "W",
            "range": 4.6951429860269664
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 27.714046965490503,
            "unit": "%",
            "range": 2.672384448014711
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 16.480483055114746,
            "unit": "%",
            "range": 19.297482611611443
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.3274902105331421,
            "unit": "s",
            "range": 0.10976134985685349
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.37984122467717,
            "unit": "W",
            "range": 4.383699246936016
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 27.616742847605185,
            "unit": "%",
            "range": 4.3888328198478215
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 16.54693603515625,
            "unit": "%",
            "range": 19.260985981532144
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.685660719871521,
            "unit": "s",
            "range": 0.2138306349515915
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 55.65809510634824,
            "unit": "W",
            "range": 5.61048523666076
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 27.239417448253704,
            "unit": "%",
            "range": 6.159247516566504
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 16.54701623916626,
            "unit": "%",
            "range": 19.26094313763909
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09309756755828857,
            "unit": "s",
            "range": 0.014820857904851437
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 56.64487958579146,
            "unit": "W",
            "range": 6.803281320687845
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 26.80741564996692,
            "unit": "%",
            "range": 7.162158915217585
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 16.547658252716065,
            "unit": "%",
            "range": 19.260600287615475
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.1653234362602234,
            "unit": "s",
            "range": 0.03264576196670532
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 56.718246490147386,
            "unit": "W",
            "range": 6.8835891618244425
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 26.663289874500766,
            "unit": "%",
            "range": 7.3981893421345
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 16.547852325439454,
            "unit": "%",
            "range": 19.260496685020282
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.653907775878906,
            "unit": "s",
            "range": 2.1997063159942627
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 86.50297890151178,
            "unit": "W",
            "range": 4.525483295232581
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 26.72284751298718,
            "unit": "%",
            "range": 5.960321703298467
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 14.927732849121094,
            "unit": "%",
            "range": 14.341531449556406
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.967622756958008,
            "unit": "s",
            "range": 5.232327461242676
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 88.39542127094492,
            "unit": "W",
            "range": 6.574557032239549
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 25.860405864337018,
            "unit": "%",
            "range": 5.788999667752928
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 10.317038631439209,
            "unit": "%",
            "range": 2.681481156907967
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 22.101285934448242,
            "unit": "s",
            "range": 5.862262725830078
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 89.0789560144661,
            "unit": "W",
            "range": 6.1405835712941155
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 26.200922750465033,
            "unit": "%",
            "range": 6.097060161023925
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 13.803042459487916,
            "unit": "%",
            "range": 12.398850188266774
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004722595331259072,
            "unit": "s",
            "range": 0.00021860445849597454
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 52.472525227000325,
            "unit": "W",
            "range": 3.923831215860464
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 27.723728100261525,
            "unit": "%",
            "range": 6.622661812145557
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 16.596203327178955,
            "unit": "%",
            "range": 18.861148977481655
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0015586853260174394,
            "unit": "s",
            "range": 0.0006822150899097323
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 52.47350626740156,
            "unit": "W",
            "range": 3.9238563811860425
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 27.72513693978321,
            "unit": "%",
            "range": 6.621863778544467
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 16.597166347503663,
            "unit": "%",
            "range": 18.860845705073004
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.007839584723114967,
            "unit": "s",
            "range": 0.004430695436894894
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.47958551411299,
            "unit": "W",
            "range": 3.923711003012884
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 27.73323294618646,
            "unit": "%",
            "range": 6.616472847689291
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.605881214141846,
            "unit": "%",
            "range": 18.85852520779784
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0038551329635083675,
            "unit": "s",
            "range": 0.001670122379437089
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.48196405612127,
            "unit": "W",
            "range": 3.9241332349889553
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 27.736888728608996,
            "unit": "%",
            "range": 6.613991325209349
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.61142225265503,
            "unit": "%",
            "range": 18.856876585566432
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0015239715576171875,
            "unit": "s",
            "range": 0.0006717123324051499
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.48379565633562,
            "unit": "W",
            "range": 3.9246134610975423
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 27.738985047430628,
            "unit": "%",
            "range": 6.612810754616189
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.612798595428465,
            "unit": "%",
            "range": 18.856802343549877
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 66.61625671386719,
            "unit": "s",
            "range": 18.76727294921875
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 92.88081989779008,
            "unit": "W",
            "range": 5.9483321285942425
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 26.75634535370333,
            "unit": "%",
            "range": 7.3917303317969925
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 19.34017686843872,
            "unit": "%",
            "range": 18.854617157561933
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.001323699951171875,
            "unit": "s",
            "range": 0.0006483392207883298
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 53.3284256120383,
            "unit": "W",
            "range": 5.101934171718252
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 28.53224679202781,
            "unit": "%",
            "range": 9.276731859331932
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 20.20294189453125,
            "unit": "%",
            "range": 20.397241476257875
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 23.553876876831055,
            "unit": "s",
            "range": 4.277445316314697
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.3982230887325684,
            "unit": "kJ",
            "range": 0.30579570607415435
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5759690403938293,
            "unit": "s",
            "range": 0.11375200003385544
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 14.584436137907934,
            "unit": "W",
            "range": 14.363113778118358
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 32.43990420864587,
            "unit": "%",
            "range": 1.4887838541450238
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5332406163215637,
            "unit": "s",
            "range": 0.07694556564092636
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 14.396045817855807,
            "unit": "W",
            "range": 14.241535855250392
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 33.05204167435624,
            "unit": "%",
            "range": 2.647340943046397
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.1425461769104004,
            "unit": "s",
            "range": 0.2561602294445038
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 40.99104393722847,
            "unit": "W",
            "range": 12.081155054558916
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 33.2160765755306,
            "unit": "%",
            "range": 2.8452034820008105
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.40240478515625,
            "unit": "%",
            "range": 0.4599392312793932
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 2.877976417541504,
            "unit": "s",
            "range": 0.4994896650314331
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 45.14255612023707,
            "unit": "W",
            "range": 12.900575125136228
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 33.6986170023206,
            "unit": "%",
            "range": 2.854407545131399
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.4872757554054261,
            "unit": "%",
            "range": 0.4709947524792884
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 0.8740331530570984,
            "unit": "s",
            "range": 0.280783087015152
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 17.10675199947572,
            "unit": "W",
            "range": 13.938082638332975
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 33.220768378169915,
            "unit": "%",
            "range": 2.7875687016370847
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.535469764471054,
            "unit": "%",
            "range": 0.4190126287076532
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.15351632237434387,
            "unit": "s",
            "range": 0.026755906641483307
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 14.57262507406989,
            "unit": "W",
            "range": 14.083290483676315
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 33.05225744221973,
            "unit": "%",
            "range": 2.8421281384344415
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.542597058415413,
            "unit": "%",
            "range": 0.4158950354255847
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.19181932508945465,
            "unit": "s",
            "range": 0.047119688242673874
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 14.570709571028598,
            "unit": "W",
            "range": 14.099142810511704
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 33.04891224263389,
            "unit": "%",
            "range": 2.846216521513313
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.5450520873069764,
            "unit": "%",
            "range": 0.41852448142845766
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.4145057201385498,
            "unit": "s",
            "range": 0.4827224910259247
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 21.79761388802274,
            "unit": "W",
            "range": 18.79193598736183
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 33.12431873225857,
            "unit": "%",
            "range": 2.8600381952045613
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.554998332262039,
            "unit": "%",
            "range": 0.4303043373002723
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.7378756999969482,
            "unit": "s",
            "range": 0.468683660030365
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 33.29918968768696,
            "unit": "W",
            "range": 20.142921583866112
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 33.789743369765,
            "unit": "%",
            "range": 3.2844096073140956
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.56256103515625,
            "unit": "%",
            "range": 0.4341070899553116
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.637441873550415,
            "unit": "s",
            "range": 0.43112486600875854
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 24.261677221571706,
            "unit": "W",
            "range": 17.69351269000702
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 34.302382302523085,
            "unit": "%",
            "range": 4.19501760547562
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6002568006515503,
            "unit": "s",
            "range": 0.1951136291027069
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 14.44602055764806,
            "unit": "W",
            "range": 14.28720652517733
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 34.09026417791205,
            "unit": "%",
            "range": 4.2243450219675465
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7022743821144104,
            "unit": "s",
            "range": 0.21010860800743103
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 14.453457589208417,
            "unit": "W",
            "range": 14.332058136189378
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 33.24810468640497,
            "unit": "%",
            "range": 3.614941664140934
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.028162837028503418,
            "unit": "s",
            "range": 0.012365005910396576
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.469765833638908,
            "unit": "W",
            "range": 14.336043139127296
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 32.89176673709183,
            "unit": "%",
            "range": 3.06415573992863
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.005884385202080011,
            "unit": "s",
            "range": 0.00259671313688159
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.47111473295729,
            "unit": "W",
            "range": 14.335288482532006
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 32.89528772416679,
            "unit": "%",
            "range": 3.0420168486656025
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0021015405654907227,
            "unit": "s",
            "range": 0.000914585602004081
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.471505137112931,
            "unit": "W",
            "range": 14.335072712296398
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 32.89768183845571,
            "unit": "%",
            "range": 3.038991410303417
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 7.8130059242248535,
            "unit": "s",
            "range": 1.7331734895706177
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 54.0596699876822,
            "unit": "W",
            "range": 14.164329576126194
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 33.779489229507526,
            "unit": "%",
            "range": 2.7101066216574003
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.5218561351299287,
            "unit": "%",
            "range": 0.46780758102968006
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0034062862396240234,
            "unit": "s",
            "range": 0.0013933033915236592
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 14.78004158788176,
            "unit": "W",
            "range": 14.325827440846972
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 33.770753730947504,
            "unit": "%",
            "range": 3.0434023803441543
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]",
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "32414974aec9bc903f75dbe26773287384c53afa",
          "message": "[pre-commit.ci] pre-commit autoupdate (#1262)\n\nupdates:\r\n- [github.com/psf/black-pre-commit-mirror: 23.10.1 → 23.11.0](https://github.com/psf/black-pre-commit-mirror/compare/23.10.1...23.11.0)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>",
          "timestamp": "2023-11-22T03:26:34Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/32414974aec9bc903f75dbe26773287384c53afa"
        },
        "date": 1700625897295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 123.66021728515625,
            "unit": "s",
            "range": 46.144798278808594
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 13.315107383271874,
            "unit": "kJ",
            "range": 4.888488246758801
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0029941899701952934,
            "unit": "s",
            "range": 0.00715405261144042
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 53.21330624364235,
            "unit": "W",
            "range": 4.490278051006256
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 61.744047275333365,
            "unit": "%",
            "range": 5.049891820919478
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 58.746183681488034,
            "unit": "%",
            "range": 41.13747118347718
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00042879098327830434,
            "unit": "s",
            "range": 0.0002322532091056928
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 53.305397014237485,
            "unit": "W",
            "range": 4.405508906133251
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 61.895113953061546,
            "unit": "%",
            "range": 5.014518155663524
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 58.75654754638672,
            "unit": "%",
            "range": 41.12529400209931
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.41241398453712463,
            "unit": "s",
            "range": 0.17865194380283356
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 54.23264925000609,
            "unit": "W",
            "range": 4.023366115146821
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 63.03384591590177,
            "unit": "%",
            "range": 4.9359289611287505
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 58.81334562301636,
            "unit": "%",
            "range": 41.0590722161933
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.4276495575904846,
            "unit": "s",
            "range": 0.26125818490982056
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 56.03033452198645,
            "unit": "W",
            "range": 4.403339920736157
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 64.90208449531772,
            "unit": "%",
            "range": 5.843577871161622
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 58.85591144561768,
            "unit": "%",
            "range": 41.01058321913671
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.801284909248352,
            "unit": "s",
            "range": 0.3813602328300476
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 58.23671459285358,
            "unit": "W",
            "range": 9.696596430029505
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 65.94095495036713,
            "unit": "%",
            "range": 6.578097820042072
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 58.86140365600586,
            "unit": "%",
            "range": 41.00454217344634
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.10742995887994766,
            "unit": "s",
            "range": 0.04588561877608299
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 55.25430520819991,
            "unit": "W",
            "range": 5.273283483421898
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 66.19176068928937,
            "unit": "%",
            "range": 6.787935527169666
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 58.86185102462768,
            "unit": "%",
            "range": 41.00402021561108
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.17788836359977722,
            "unit": "s",
            "range": 0.0685366615653038
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 55.24975693308365,
            "unit": "W",
            "range": 4.896449642864626
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 66.27214102330916,
            "unit": "%",
            "range": 6.725004047177534
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 58.86217765808105,
            "unit": "%",
            "range": 41.00363914651761
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.494199752807617,
            "unit": "s",
            "range": 3.7765471935272217
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 98.31147952249526,
            "unit": "W",
            "range": 4.54964305615653
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 67.22155416663641,
            "unit": "%",
            "range": 5.805520087510226
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 58.72841930389404,
            "unit": "%",
            "range": 41.18503969368876
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 24.05026626586914,
            "unit": "s",
            "range": 10.454222679138184
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 103.928235907943,
            "unit": "W",
            "range": 7.109803331783785
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 66.61867379454551,
            "unit": "%",
            "range": 6.3253753786379185
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 58.73678092956543,
            "unit": "%",
            "range": 41.25483885562515
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 21.73784828186035,
            "unit": "s",
            "range": 7.614767074584961
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 108.36186648203025,
            "unit": "W",
            "range": 5.892366891995603
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 66.8000741684299,
            "unit": "%",
            "range": 6.119888032028565
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 60.936469650268556,
            "unit": "%",
            "range": 39.01789508806107
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0003452301025390625,
            "unit": "s",
            "range": 0.00014905902207829058
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 52.74515619308105,
            "unit": "W",
            "range": 3.757653953560223
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 66.54179672229988,
            "unit": "%",
            "range": 6.16038217848169
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 65.76247024536133,
            "unit": "%",
            "range": 35.591402210071806
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0014244079357013106,
            "unit": "s",
            "range": 0.0014135162346065044
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 52.74719476636987,
            "unit": "W",
            "range": 3.7606344269923193
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 66.54090786135166,
            "unit": "%",
            "range": 6.162654324757713
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 65.76442489624023,
            "unit": "%",
            "range": 35.590259460756556
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.00859756488353014,
            "unit": "s",
            "range": 0.010760515928268433
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.762603297644816,
            "unit": "W",
            "range": 3.782857772351243
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 66.53406880979053,
            "unit": "%",
            "range": 6.1796167265052615
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 65.77912216186523,
            "unit": "%",
            "range": 35.581696761435055
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.003036117646843195,
            "unit": "s",
            "range": 0.0016504625091329217
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.77701387746519,
            "unit": "W",
            "range": 3.802834916543836
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 66.5288147055952,
            "unit": "%",
            "range": 6.193006963328838
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 65.79060249328613,
            "unit": "%",
            "range": 35.57504484481693
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0011894225608557463,
            "unit": "s",
            "range": 0.000567164272069931
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 52.77952938298271,
            "unit": "W",
            "range": 3.806402408189193
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 66.52773974237977,
            "unit": "%",
            "range": 6.195662784088126
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 65.79290657043457,
            "unit": "%",
            "range": 35.57371368759815
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 65.7117919921875,
            "unit": "s",
            "range": 26.21973419189453
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 107.46025192088291,
            "unit": "W",
            "range": 2.217457438462305
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 66.70674754074017,
            "unit": "%",
            "range": 4.435741038166922
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 68.57404232025146,
            "unit": "%",
            "range": 34.31106220568586
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0012069701915606856,
            "unit": "s",
            "range": 0.0007387350196950138
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.90623433041111,
            "unit": "W",
            "range": 2.7969207892158034
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 68.5513800320919,
            "unit": "%",
            "range": 5.0808693578775594
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 67.73223876953125,
            "unit": "%",
            "range": 39.28902367487347
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 29.474044799804688,
            "unit": "s",
            "range": 6.15141487121582
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.9579982066356447,
            "unit": "kJ",
            "range": 0.7224232975825841
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5993595719337463,
            "unit": "s",
            "range": 0.0691155344247818
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 14.168002686480955,
            "unit": "W",
            "range": 12.995848841174716
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 47.29079297309079,
            "unit": "%",
            "range": 4.800512177968173
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 2.14385986328125,
            "unit": "%",
            "range": 0.911007724364914
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.6159229874610901,
            "unit": "s",
            "range": 0.1414923369884491
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 14.864376680015013,
            "unit": "W",
            "range": 12.11958583356602
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 50.23867492514388,
            "unit": "%",
            "range": 7.912849733376494
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 2.14385986328125,
            "unit": "%",
            "range": 0.911007724364914
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.335967540740967,
            "unit": "s",
            "range": 0.26800763607025146
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 44.14368156426627,
            "unit": "W",
            "range": 12.673954533630205
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 50.073439998311294,
            "unit": "%",
            "range": 8.400129160090014
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 2.14385986328125,
            "unit": "%",
            "range": 0.911007724364914
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.1472673416137695,
            "unit": "s",
            "range": 0.26852309703826904
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 49.209820789881796,
            "unit": "W",
            "range": 13.367505605822975
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 48.61392420201254,
            "unit": "%",
            "range": 7.412774361093144
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 2.1285887137055397,
            "unit": "%",
            "range": 0.9071258380947029
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.0943002700805664,
            "unit": "s",
            "range": 0.23761099576950073
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 20.220560554681118,
            "unit": "W",
            "range": 22.28558698154814
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 49.190116268276284,
            "unit": "%",
            "range": 8.805372392791414
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 2.1539607852697373,
            "unit": "%",
            "range": 0.843952365620594
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.19019070267677307,
            "unit": "s",
            "range": 0.04571573808789253
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 17.848909174504204,
            "unit": "W",
            "range": 15.283946782593793
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 49.240821639795534,
            "unit": "%",
            "range": 9.009547595205149
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 2.3310717582702636,
            "unit": "%",
            "range": 0.758569822145633
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.22931304574012756,
            "unit": "s",
            "range": 0.049841802567243576
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 18.50702153432458,
            "unit": "W",
            "range": 15.118084306013976
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 49.28509783629569,
            "unit": "%",
            "range": 9.016379343068492
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 2.4035899221897123,
            "unit": "%",
            "range": 0.7436254252206246
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.8529090881347656,
            "unit": "s",
            "range": 0.5610562562942505
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 38.75626974648789,
            "unit": "W",
            "range": 21.008725719814986
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 49.90081934652752,
            "unit": "%",
            "range": 8.838423015789063
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 2.574362578988075,
            "unit": "%",
            "range": 0.7140932371753171
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.4056899547576904,
            "unit": "s",
            "range": 0.7272487878799438
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 37.97829594907083,
            "unit": "W",
            "range": 24.612753874055063
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 50.11975369058378,
            "unit": "%",
            "range": 8.380041089631492
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 2.6575599372386933,
            "unit": "%",
            "range": 0.6703494132892154
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.300807476043701,
            "unit": "s",
            "range": 0.8429566025733948
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 47.82985072315959,
            "unit": "W",
            "range": 18.072039884968248
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 50.24188129116758,
            "unit": "%",
            "range": 8.280137141723038
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 2.676214563846588,
            "unit": "%",
            "range": 0.680974194396862
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7898472547531128,
            "unit": "s",
            "range": 0.2868623733520508
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 20.31052339035192,
            "unit": "W",
            "range": 20.715018480634544
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 49.997099871402085,
            "unit": "%",
            "range": 7.605541023873671
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 2.6833727836608885,
            "unit": "%",
            "range": 0.6777479999634899
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.892421543598175,
            "unit": "s",
            "range": 0.20110328495502472
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 24.923770884353623,
            "unit": "W",
            "range": 17.85842156237097
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 49.328611170707816,
            "unit": "%",
            "range": 7.58865711160798
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 2.7020479500293733,
            "unit": "%",
            "range": 0.6874967823026525
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.03697805479168892,
            "unit": "s",
            "range": 0.01894935593008995
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.571904417238084,
            "unit": "W",
            "range": 17.210062137998317
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 49.18085949689588,
            "unit": "%",
            "range": 7.844139366568008
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.70660400390625,
            "unit": "%",
            "range": 0.6901983280840344
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.007960748858749866,
            "unit": "s",
            "range": 0.0033400491811335087
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.577402058773387,
            "unit": "W",
            "range": 17.21200070213113
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 49.1821320858562,
            "unit": "%",
            "range": 7.85538021697111
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.70660400390625,
            "unit": "%",
            "range": 0.6901983280840344
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0028036832809448242,
            "unit": "s",
            "range": 0.0011635388946160674
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 18.57862376861717,
            "unit": "W",
            "range": 17.21253516484825
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 49.18232084601057,
            "unit": "%",
            "range": 7.858205337190893
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.70660400390625,
            "unit": "%",
            "range": 0.6901983280840344
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 10.585996627807617,
            "unit": "s",
            "range": 3.679874897003174
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 61.59429612654922,
            "unit": "W",
            "range": 16.071329662241546
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 50.750526841139404,
            "unit": "%",
            "range": 8.281223171300597
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 2.7762950539588926,
            "unit": "%",
            "range": 1.0132839842001258
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.003152990248054266,
            "unit": "s",
            "range": 0.001999015687033534
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 18.4062955526973,
            "unit": "W",
            "range": 16.173932927090263
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 54.50580269346621,
            "unit": "%",
            "range": 9.509000523829286
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 2.69317626953125,
            "unit": "%",
            "range": 1.4011311082995244
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "29213dc1490f53873fa2e0ebee4459feb1c77700",
          "message": "Merge pull request #1268 from helmholtz-analytics/workflows/merge-release-changes-into-main\n\nMerge latest `release/1.3.x` changes and upgrade version in `main`",
          "timestamp": "2023-11-22T08:47:13Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/29213dc1490f53873fa2e0ebee4459feb1c77700"
        },
        "date": 1700644673047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 118.577392578125,
            "unit": "s",
            "range": 33.00465393066406
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 13.3773656297625,
            "unit": "kJ",
            "range": 4.4289408999237185
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.00352132017724216,
            "unit": "s",
            "range": 0.008516361005604267
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 62.22777567095509,
            "unit": "W",
            "range": 15.163490269290902
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 78.93886298624778,
            "unit": "%",
            "range": 2.4976874658620414
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 84.0876947402954,
            "unit": "%",
            "range": 31.86115787725181
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00029560551047325134,
            "unit": "s",
            "range": 0.00005700424298993312
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 61.99766134694014,
            "unit": "W",
            "range": 14.634949380829678
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 79.0588613734495,
            "unit": "%",
            "range": 2.4656676339807677
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 84.09285612106324,
            "unit": "%",
            "range": 31.8500789457167
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3467852473258972,
            "unit": "s",
            "range": 0.0922609195113182
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 60.82465973421328,
            "unit": "W",
            "range": 11.86451459033709
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 79.80622714690755,
            "unit": "%",
            "range": 2.2387389793736823
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 84.13651256561279,
            "unit": "%",
            "range": 31.756517546493402
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.3416323661804199,
            "unit": "s",
            "range": 0.08205997943878174
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 58.71029943460378,
            "unit": "W",
            "range": 8.063622898338679
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 81.11566720688235,
            "unit": "%",
            "range": 2.362231015195963
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 84.20694065093994,
            "unit": "%",
            "range": 31.606141230702555
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6274707913398743,
            "unit": "s",
            "range": 0.11164765059947968
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 55.35281156946945,
            "unit": "W",
            "range": 3.215241289018242
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 82.05683441421448,
            "unit": "%",
            "range": 3.120515352571428
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 84.22271728515625,
            "unit": "%",
            "range": 31.57255100035137
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09183432161808014,
            "unit": "s",
            "range": 0.027957633137702942
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 53.82976577829552,
            "unit": "W",
            "range": 1.5218166493014742
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 82.20433173789469,
            "unit": "%",
            "range": 3.3653355995670013
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 84.22285766601563,
            "unit": "%",
            "range": 31.572252271763848
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.1590619683265686,
            "unit": "s",
            "range": 0.01955283246934414
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 53.87261774913484,
            "unit": "W",
            "range": 1.4260439282256048
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 82.17113243076516,
            "unit": "%",
            "range": 3.404242431212551
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 84.22307739257812,
            "unit": "%",
            "range": 31.571784702186832
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 7.98813009262085,
            "unit": "s",
            "range": 1.059200644493103
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 103.25917549593316,
            "unit": "W",
            "range": 4.33079360669676
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 81.10518510503536,
            "unit": "%",
            "range": 2.1569020726632226
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 84.36181716918945,
            "unit": "%",
            "range": 31.277930052223653
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.331941604614258,
            "unit": "s",
            "range": 6.135828018188477
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 110.34047250867589,
            "unit": "W",
            "range": 5.306659276810486
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 81.31250635825063,
            "unit": "%",
            "range": 2.0123162500295564
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 85.30363483428955,
            "unit": "%",
            "range": 29.495580483225595
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 21.519794464111328,
            "unit": "s",
            "range": 7.339058876037598
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 108.27829229023946,
            "unit": "W",
            "range": 5.813474417318298
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 81.00592809705373,
            "unit": "%",
            "range": 1.8521096849175551
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 91.39574794769287,
            "unit": "%",
            "range": 23.71559842965901
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0003673553583212197,
            "unit": "s",
            "range": 0.00012252306623850018
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 51.959425620812944,
            "unit": "W",
            "range": 3.8967676890865603
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 80.76298703361907,
            "unit": "%",
            "range": 1.8610629604502071
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 92.1830961227417,
            "unit": "%",
            "range": 23.38408611765225
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0013153075706213713,
            "unit": "s",
            "range": 0.00047452381113544106
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 51.9603891697235,
            "unit": "W",
            "range": 3.8976983941539176
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 80.76301144694561,
            "unit": "%",
            "range": 1.8610716662220668
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 92.18370475769044,
            "unit": "%",
            "range": 23.382260213159913
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.008439254947006702,
            "unit": "s",
            "range": 0.006920561194419861
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.96550635710959,
            "unit": "W",
            "range": 3.9046164300572306
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 80.76322885337642,
            "unit": "%",
            "range": 1.8611678102406548
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 92.19292087554932,
            "unit": "%",
            "range": 23.354611864948232
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0037208558060228825,
            "unit": "s",
            "range": 0.0011571180075407028
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.96810561987816,
            "unit": "W",
            "range": 3.9091097528718075
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 80.76337770389594,
            "unit": "%",
            "range": 1.8612254557179084
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 92.20076923370361,
            "unit": "%",
            "range": 23.331066795064125
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0015346526633948088,
            "unit": "s",
            "range": 0.0005421302630566061
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.96921722098318,
            "unit": "W",
            "range": 3.910761736215111
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 80.76345095270324,
            "unit": "%",
            "range": 1.8612537045964868
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 92.20276470184326,
            "unit": "%",
            "range": 23.325080391810825
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 65.61341094970703,
            "unit": "s",
            "range": 17.331005096435547
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 110.8125200787675,
            "unit": "W",
            "range": 5.056654581716144
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 81.29786734674026,
            "unit": "%",
            "range": 0.9920687104729764
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 93.28205604553223,
            "unit": "%",
            "range": 19.8124682224496
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0013359070289880037,
            "unit": "s",
            "range": 0.0002765684621408582
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.80787631428294,
            "unit": "W",
            "range": 3.915931310252345
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 80.89070916354481,
            "unit": "%",
            "range": 4.78964852691323
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 92.51739501953125,
            "unit": "%",
            "range": 22.39339222282854
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 27.4655704498291,
            "unit": "s",
            "range": 9.963050842285156
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 2.6867867120873044,
            "unit": "kJ",
            "range": 0.20666779123863746
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6126589775085449,
            "unit": "s",
            "range": 0.15068979561328888
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 44.406689429101654,
            "unit": "W",
            "range": 17.479290928506714
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 82.42493648328929,
            "unit": "%",
            "range": 1.2993285884334818
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 11.832298040390015,
            "unit": "%",
            "range": 3.4166489922029744
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5824396014213562,
            "unit": "s",
            "range": 0.15129970014095306
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 44.43828626029734,
            "unit": "W",
            "range": 17.527824403571554
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 83.66165472684128,
            "unit": "%",
            "range": 2.3790240951529755
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 11.83624267578125,
            "unit": "%",
            "range": 3.4129340011112377
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.250659942626953,
            "unit": "s",
            "range": 0.6712735295295715
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 89.38416884946969,
            "unit": "W",
            "range": 18.79858645642917
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 83.26067567443665,
            "unit": "%",
            "range": 2.585208935981023
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 11.805899786949158,
            "unit": "%",
            "range": 3.432330401103891
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.196614980697632,
            "unit": "s",
            "range": 0.8064531683921814
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 76.1650845558024,
            "unit": "W",
            "range": 17.69550953929374
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 82.70755456992313,
            "unit": "%",
            "range": 2.6878784479563955
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 11.49434835910797,
            "unit": "%",
            "range": 3.7341808136936083
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.0915095806121826,
            "unit": "s",
            "range": 0.3670029938220978
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 46.71045574736503,
            "unit": "W",
            "range": 14.809355895650853
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 83.43435606728657,
            "unit": "%",
            "range": 3.2122332539251146
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 11.464508032798767,
            "unit": "%",
            "range": 3.855024765465022
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.2159014642238617,
            "unit": "s",
            "range": 0.038424160331487656
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 44.92383591917566,
            "unit": "W",
            "range": 18.16436644072585
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 83.38748415257162,
            "unit": "%",
            "range": 3.2109552224746447
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 11.490889620780944,
            "unit": "%",
            "range": 3.8361851347603033
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.23808152973651886,
            "unit": "s",
            "range": 0.05539329722523689
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 44.97182685723887,
            "unit": "W",
            "range": 18.203981204112008
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 83.286147932028,
            "unit": "%",
            "range": 3.0942885326965417
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 11.568611550331116,
            "unit": "%",
            "range": 3.756183945964718
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.772833228111267,
            "unit": "s",
            "range": 0.7907018661499023
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 54.18490620716547,
            "unit": "W",
            "range": 16.61473046134434
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 83.20722094026712,
            "unit": "%",
            "range": 2.8421672521357593
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 11.78552050590515,
            "unit": "%",
            "range": 3.6103133099527027
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.090609550476074,
            "unit": "s",
            "range": 0.9573426246643066
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 74.7612955124429,
            "unit": "W",
            "range": 22.671347743196147
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 83.19114753272267,
            "unit": "%",
            "range": 2.73175051557008
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 12.04624764919281,
            "unit": "%",
            "range": 3.5869705258537787
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 2.026686429977417,
            "unit": "s",
            "range": 0.8232881426811218
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 70.4411864561728,
            "unit": "W",
            "range": 22.441900369028627
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 83.05038915784743,
            "unit": "%",
            "range": 2.8255243801573853
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 12.078071475028992,
            "unit": "%",
            "range": 3.596992529419512
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7114140391349792,
            "unit": "s",
            "range": 0.2639962136745453
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 47.77031417774948,
            "unit": "W",
            "range": 13.903928092799182
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 82.86415950582882,
            "unit": "%",
            "range": 3.4938176586186875
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 12.0807594537735,
            "unit": "%",
            "range": 3.597204945067805
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6578356623649597,
            "unit": "s",
            "range": 0.09026803821325302
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 44.74149782044881,
            "unit": "W",
            "range": 17.980496671984458
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 82.8610237947826,
            "unit": "%",
            "range": 3.137880156449734
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 12.020155441761016,
            "unit": "%",
            "range": 3.767490291905138
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.028432250022888184,
            "unit": "s",
            "range": 0.008602223359048367
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 44.94892215749236,
            "unit": "W",
            "range": 18.122746975144064
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 82.6718781265431,
            "unit": "%",
            "range": 3.28713801185851
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 11.880613332986831,
            "unit": "%",
            "range": 4.172518097095527
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0052291154861450195,
            "unit": "s",
            "range": 0.0010898710461333394
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 44.95632470424064,
            "unit": "W",
            "range": 18.128724318006682
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 82.6637486376091,
            "unit": "%",
            "range": 3.296838654601341
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 11.87463151216507,
            "unit": "%",
            "range": 4.190854036864555
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0018575668800622225,
            "unit": "s",
            "range": 0.00027455814415588975
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 44.958214395285346,
            "unit": "W",
            "range": 18.13022819328061
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 82.66230065911834,
            "unit": "%",
            "range": 3.2985538905601186
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 11.873577052354813,
            "unit": "%",
            "range": 4.1941774615542355
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 9.529352188110352,
            "unit": "s",
            "range": 3.569870948791504
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 101.17948119009776,
            "unit": "W",
            "range": 21.625871134379384
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 83.10296810525044,
            "unit": "%",
            "range": 3.230117122012317
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 12.110646647214889,
            "unit": "%",
            "range": 4.0866242518909575
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.002925300505012274,
            "unit": "s",
            "range": 0.0005913900677114725
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 49.54480999053186,
            "unit": "W",
            "range": 14.186685964423072
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 83.23988113157894,
            "unit": "%",
            "range": 2.874681704962701
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 12.59918212890625,
            "unit": "%",
            "range": 3.3207309683590602
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian Hoppe",
            "username": "mrfh92",
            "email": "112093564+mrfh92@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5125cccd1f05dc5b232b3d934f7fded5e154ca8e",
          "message": "Bugs/1258  bug lasso does not work on gpu (#1269)\n\n* corrected bug\r\n\r\n* Fix Pytorch release tracking workflows (#1264)\r\n\r\n* upgrade checkout action & use default token\r\n\r\n* increase tolerance for single-prec torch.inv comparison\r\n\r\n* fix typo\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Hoppe <mrhf92@gmail.com>\r\nCo-authored-by: Michael Tarnawa <m.tarnawa@fz-juelich.de>\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-11-22T10:41:31Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/5125cccd1f05dc5b232b3d934f7fded5e154ca8e"
        },
        "date": 1700651623336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 136.27464294433594,
            "unit": "s",
            "range": 34.25596237182617
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 13.155224526165624,
            "unit": "kJ",
            "range": 3.738351438081825
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0030653574503958225,
            "unit": "s",
            "range": 0.0076261116191744804
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 52.39811210120738,
            "unit": "W",
            "range": 5.8945583899971234
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 40.10767106194686,
            "unit": "%",
            "range": 5.4822504950709465
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 18.557468032836915,
            "unit": "%",
            "range": 20.829450044474658
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0002990711363963783,
            "unit": "s",
            "range": 0.00015713894390501082
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 52.5044215203096,
            "unit": "W",
            "range": 5.833598160224165
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 39.974815250267014,
            "unit": "%",
            "range": 5.40707742064676
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 18.56786240339279,
            "unit": "%",
            "range": 20.821067898652153
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3897516429424286,
            "unit": "s",
            "range": 0.1805371791124344
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 53.20820987824226,
            "unit": "W",
            "range": 5.506432504927988
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 39.79311212140094,
            "unit": "%",
            "range": 5.997613994322081
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 18.637771892547608,
            "unit": "%",
            "range": 20.765820736862356
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.3806145191192627,
            "unit": "s",
            "range": 0.19656935334205627
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.226489685840214,
            "unit": "W",
            "range": 5.105063513030796
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 38.934107357479135,
            "unit": "%",
            "range": 9.732881729872823
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 18.727130079269408,
            "unit": "%",
            "range": 20.698083574393017
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7732887864112854,
            "unit": "s",
            "range": 0.27698028087615967
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 57.56368255456122,
            "unit": "W",
            "range": 11.204714198682058
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 36.64258255625649,
            "unit": "%",
            "range": 14.721726830812658
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 18.74053955078125,
            "unit": "%",
            "range": 20.688199259070196
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.11003853380680084,
            "unit": "s",
            "range": 0.04649078845977783
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 55.11569543009684,
            "unit": "W",
            "range": 5.097638531918441
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 35.91158739883386,
            "unit": "%",
            "range": 16.159354299410257
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 18.740691351890565,
            "unit": "%",
            "range": 20.688087785027726
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.18419575691223145,
            "unit": "s",
            "range": 0.0574798546731472
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 55.10699139132797,
            "unit": "W",
            "range": 5.003913212649763
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 35.887051705298234,
            "unit": "%",
            "range": 16.133112001573277
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 18.740950918197633,
            "unit": "%",
            "range": 20.687897196229063
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.607010841369629,
            "unit": "s",
            "range": 3.9647202491760254
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 90.73105522834416,
            "unit": "W",
            "range": 7.105703854635668
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 36.20907460525872,
            "unit": "%",
            "range": 16.32098999199306
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 18.919695568084716,
            "unit": "%",
            "range": 20.575073033190673
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 25.77516746520996,
            "unit": "s",
            "range": 8.302583694458008
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 91.61919762345107,
            "unit": "W",
            "range": 5.591186976978175
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 35.643494239794634,
            "unit": "%",
            "range": 16.744823246416527
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 25.27723960876465,
            "unit": "%",
            "range": 24.024088149210442
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.724170684814453,
            "unit": "s",
            "range": 6.152112007141113
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 93.38444291963799,
            "unit": "W",
            "range": 6.223553342200845
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 34.145842718209465,
            "unit": "%",
            "range": 15.94819895692175
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 23.152027463912965,
            "unit": "%",
            "range": 20.727858398446596
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004764556942973286,
            "unit": "s",
            "range": 0.0002310236159246415
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 53.303042167411185,
            "unit": "W",
            "range": 3.60611982652327
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 33.40887571834121,
            "unit": "%",
            "range": 15.58753397656005
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 22.41862850189209,
            "unit": "%",
            "range": 20.549558068779728
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0016780853038653731,
            "unit": "s",
            "range": 0.0008470868924632668
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 53.30333143598708,
            "unit": "W",
            "range": 3.6048104850297245
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 33.409274743420056,
            "unit": "%",
            "range": 15.587820297830179
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 22.419584465026855,
            "unit": "%",
            "range": 20.548936623411382
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.008190917782485485,
            "unit": "s",
            "range": 0.005570953246206045
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.30771903144034,
            "unit": "W",
            "range": 3.5981814079866994
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 33.411474839574815,
            "unit": "%",
            "range": 15.589238015694537
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 22.42739791870117,
            "unit": "%",
            "range": 20.543874439600028
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0034362792503088713,
            "unit": "s",
            "range": 0.0017706819344311953
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.31050479785522,
            "unit": "W",
            "range": 3.59469985281412
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 33.412759659392385,
            "unit": "%",
            "range": 15.589974532056873
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 22.432976627349852,
            "unit": "%",
            "range": 20.540268331688786
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0013767242198809981,
            "unit": "s",
            "range": 0.0006781828706152737
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 53.311991450249465,
            "unit": "W",
            "range": 3.593265768178715
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 33.413261425744665,
            "unit": "%",
            "range": 15.590250905638092
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 22.434055042266845,
            "unit": "%",
            "range": 20.539574206305037
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 74.74149322509766,
            "unit": "s",
            "range": 21.385160446166992
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 96.17477796845269,
            "unit": "W",
            "range": 7.683352604597313
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 34.179869031029156,
            "unit": "%",
            "range": 16.806070814521863
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 25.455301380157472,
            "unit": "%",
            "range": 21.670665846339315
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0014328003162518144,
            "unit": "s",
            "range": 0.0008255752618424594
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 54.18512651678883,
            "unit": "W",
            "range": 5.445563892858306
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 34.11325781676296,
            "unit": "%",
            "range": 19.31227947275388
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 19.19464111328125,
            "unit": "%",
            "range": 20.397530478945512
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 25.448476791381836,
            "unit": "s",
            "range": 1.38447904586792
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.4878510399324218,
            "unit": "kJ",
            "range": 0.26887342297533323
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.548423171043396,
            "unit": "s",
            "range": 0.07812990248203278
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 18.056878499732896,
            "unit": "W",
            "range": 16.363919326143346
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 35.01486291993319,
            "unit": "%",
            "range": 3.155669391948495
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5256282091140747,
            "unit": "s",
            "range": 0.06884125620126724
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 18.022328755901633,
            "unit": "W",
            "range": 16.274683626124695
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 37.00911250869818,
            "unit": "%",
            "range": 4.925770248219738
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.2154579162597656,
            "unit": "s",
            "range": 0.24580712616443634
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 45.764497805131086,
            "unit": "W",
            "range": 14.189126524309936
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 37.27188142108737,
            "unit": "%",
            "range": 5.355792555201175
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.196230173110962,
            "unit": "s",
            "range": 0.1765449345111847
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 39.99222027907687,
            "unit": "W",
            "range": 11.64042762188486
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 37.344132409971834,
            "unit": "%",
            "range": 4.78051322950146
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.35162353515625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 0.9693716764450073,
            "unit": "s",
            "range": 0.20475558936595917
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 15.08289141499257,
            "unit": "W",
            "range": 21.335462140687113
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 37.80883721849408,
            "unit": "%",
            "range": 4.78484284191287
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.3629122495651245,
            "unit": "%",
            "range": 0.49059147219755006
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.18754656612873077,
            "unit": "s",
            "range": 0.03312305361032486
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 13.34973204349669,
            "unit": "W",
            "range": 12.229919735764941
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 37.935714612872864,
            "unit": "%",
            "range": 5.2710015574537845
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.397208246588707,
            "unit": "%",
            "range": 0.46235689151960846
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2229509800672531,
            "unit": "s",
            "range": 0.05070614814758301
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 13.943470032877547,
            "unit": "W",
            "range": 13.090226382798168
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 37.72932531892781,
            "unit": "%",
            "range": 5.261024919271955
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.4088185787200929,
            "unit": "%",
            "range": 0.4576703820297699
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.6213343143463135,
            "unit": "s",
            "range": 0.16340576112270355
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 30.20988629403908,
            "unit": "W",
            "range": 17.60210135337814
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 37.10543207937918,
            "unit": "%",
            "range": 5.228344039663224
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.47857666015625,
            "unit": "%",
            "range": 0.3924992420407892
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.8641847372055054,
            "unit": "s",
            "range": 0.2244585007429123
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 34.79070739827196,
            "unit": "W",
            "range": 17.873238828137616
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 37.38994306775852,
            "unit": "%",
            "range": 5.900868205800128
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.54205322265625,
            "unit": "%",
            "range": 0.4153279813546155
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.7787539958953857,
            "unit": "s",
            "range": 0.3530053198337555
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 28.377229663457808,
            "unit": "W",
            "range": 21.611657607688024
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 37.71217713763072,
            "unit": "%",
            "range": 5.902973010063634
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.54718017578125,
            "unit": "%",
            "range": 0.4130902662118056
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.7179540395736694,
            "unit": "s",
            "range": 0.13339197635650635
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 14.832259213702034,
            "unit": "W",
            "range": 14.021923199491566
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 37.296024124004624,
            "unit": "%",
            "range": 5.344656609594874
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.55059814453125,
            "unit": "%",
            "range": 0.4119108906276052
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.7214712500572205,
            "unit": "s",
            "range": 0.11804315447807312
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 14.631276733852015,
            "unit": "W",
            "range": 14.111796402406519
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 37.32059075108027,
            "unit": "%",
            "range": 5.114918610214573
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.5523803919553756,
            "unit": "%",
            "range": 0.4137688741443227
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.03150777891278267,
            "unit": "s",
            "range": 0.010818719863891602
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.562747865814947,
            "unit": "W",
            "range": 14.1447258509212
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 37.39348240225404,
            "unit": "%",
            "range": 5.102426947566501
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.5569528222084046,
            "unit": "%",
            "range": 0.41881020069127967
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.008026051335036755,
            "unit": "s",
            "range": 0.003087855875492096
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.561895180708499,
            "unit": "W",
            "range": 14.14530980932627
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 37.39414255806054,
            "unit": "%",
            "range": 5.103656354968968
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.557445728778839,
            "unit": "%",
            "range": 0.41937682674507964
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0024466991890221834,
            "unit": "s",
            "range": 0.0009062675526365638
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 14.561694463085718,
            "unit": "W",
            "range": 14.145440133474
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 37.39434178556348,
            "unit": "%",
            "range": 5.104126998182924
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.5575504720211029,
            "unit": "%",
            "range": 0.41949780838192724
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 8.636385917663574,
            "unit": "s",
            "range": 1.1200085878372192
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 52.747610854150025,
            "unit": "W",
            "range": 12.845455485494286
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 37.86182861628407,
            "unit": "%",
            "range": 4.7156439162488715
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.5594025909900666,
            "unit": "%",
            "range": 0.4335449161741837
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0035457133781164885,
            "unit": "s",
            "range": 0.0012913470854982734
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 18.09138900682118,
            "unit": "W",
            "range": 16.299676854455154
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 39.09992296288509,
            "unit": "%",
            "range": 4.67497739930368
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 1.4958764970302583,
            "unit": "%",
            "range": 0.5038206872274676
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Claudia Comito",
            "username": "ClaudiaComito",
            "email": "39374113+ClaudiaComito@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3302a44512c906b860437214fd37361dcbf5a280",
          "message": "Merge release v1.3.1 into `main`  (#1278)\n\n* copy from fix/1168-update-docker-image-and-documentation-on-release13x-and-main\r\n\r\n* corrected bug\r\n\r\n* docker scripts documentation\r\n\r\n* Fix tzdata handling and merging multiple actions\r\n\r\nThe copy of tzdata was originally intended to be used from the root\r\nof the repository. The documentation states building docker images\r\nfrom the docker directory. This had to be aligned.\r\n\r\nMoreover, each RUN line in a Dockerfile represents the building of\r\nanother intermediate image. This has to be taken into account when\r\nwriting the files. Commands such as \"cd\" will not work on separate\r\nlines.\r\n\r\n* update pre-commit-config\r\n\r\n* Fix Pytorch release tracking workflows (#1264)\r\n\r\n* upgrade checkout action & use default token\r\n\r\n* increase tolerance for single-prec torch.inv comparison\r\n\r\n* fix typo\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n* Fix `ht.diff` for 1-element-axis edge case (#1201)\r\n\r\n* fix diff axis size one\r\n\r\n* fix diff() axis along split\r\n\r\n* remove debug code\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n* update version to 1.3.1 before release\r\n\r\n* revert\r\n\r\n* Update version before release  (#1274)\r\n\r\n* update version to 1.3.1 before release\r\n\r\n* revert\r\n\r\n* update version before release\r\n\r\n* update version to dev, update changelog\r\n\r\n---------\r\n\r\nCo-authored-by: Gutiérrez Hermosillo Muriedas, Juan Pedro <juanpedroghm@gmail.com>\r\nCo-authored-by: Hoppe <mrhf92@gmail.com>\r\nCo-authored-by: Bjoern Hagemeier <b.hagemeier@fz-juelich.de>\r\nCo-authored-by: Michael Tarnawa <m.tarnawa@fz-juelich.de>\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>",
          "timestamp": "2023-11-23T10:49:09Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/3302a44512c906b860437214fd37361dcbf5a280"
        },
        "date": 1700738496039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 129.26870727539062,
            "unit": "s",
            "range": 16.945436477661133
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 11.500220308140625,
            "unit": "kJ",
            "range": 2.0737656577922006
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.002603390021249652,
            "unit": "s",
            "range": 0.006333751603960991
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 51.0296372085969,
            "unit": "W",
            "range": 1.720732642859516
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 26.097684747403566,
            "unit": "%",
            "range": 3.261074024611978
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 9.79558081626892,
            "unit": "%",
            "range": 3.1033382436965007
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.00024764722911641,
            "unit": "s",
            "range": 0.00008975616219686344
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 51.255451427107026,
            "unit": "W",
            "range": 1.7553742732435933
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 25.856649768274337,
            "unit": "%",
            "range": 3.4118364558357817
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 9.805158948898315,
            "unit": "%",
            "range": 3.0881172809184623
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.3196190893650055,
            "unit": "s",
            "range": 0.14522576332092285
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 52.354318064436825,
            "unit": "W",
            "range": 2.343160382499388
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 24.821012981107344,
            "unit": "%",
            "range": 4.18130343902579
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 9.89887490272522,
            "unit": "%",
            "range": 2.9498327542389333
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.32292598485946655,
            "unit": "s",
            "range": 0.14451752603054047
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 53.93466171203251,
            "unit": "W",
            "range": 3.5741942898311505
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 22.965160953705908,
            "unit": "%",
            "range": 6.261581862048063
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 9.94171142578125,
            "unit": "%",
            "range": 2.893528897302169
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6438411474227905,
            "unit": "s",
            "range": 0.2595314383506775
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 55.799268796575824,
            "unit": "W",
            "range": 5.988523088514126
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 20.336936804483464,
            "unit": "%",
            "range": 9.524618075954992
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 9.94171142578125,
            "unit": "%",
            "range": 2.893528897302169
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09869004040956497,
            "unit": "s",
            "range": 0.05225164443254471
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 56.70299321531968,
            "unit": "W",
            "range": 8.540575459981257
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 19.19226304383277,
            "unit": "%",
            "range": 11.024591515344797
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 9.942227172851563,
            "unit": "%",
            "range": 2.8928791089315986
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.17885802686214447,
            "unit": "s",
            "range": 0.024668537080287933
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 56.710463344066135,
            "unit": "W",
            "range": 8.530883805777998
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 18.981862685590478,
            "unit": "%",
            "range": 11.33747446609521
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 9.942505884170533,
            "unit": "%",
            "range": 2.892528244999026
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 8.865078926086426,
            "unit": "s",
            "range": 2.160841941833496
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 84.98936443315628,
            "unit": "W",
            "range": 6.037542615720076
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 18.856300757391526,
            "unit": "%",
            "range": 11.715180439146348
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 10.011598682403564,
            "unit": "%",
            "range": 2.910843215526745
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.9791316986084,
            "unit": "s",
            "range": 3.3350882530212402
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 86.83620602168668,
            "unit": "W",
            "range": 7.065541262070617
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 18.85433358177458,
            "unit": "%",
            "range": 11.852101519451143
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 14.596176433563233,
            "unit": "%",
            "range": 16.411820061317563
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 23.482147216796875,
            "unit": "s",
            "range": 5.52252721786499
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 87.87843556335463,
            "unit": "W",
            "range": 8.49342053296362
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 20.783858639013737,
            "unit": "%",
            "range": 11.972159856220008
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 16.113104724884032,
            "unit": "%",
            "range": 19.355005705106343
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0004585265996865928,
            "unit": "s",
            "range": 0.00022249073663260788
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 51.57125750476441,
            "unit": "W",
            "range": 3.3435961321581984
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 22.155914415212216,
            "unit": "%",
            "range": 13.53664413597613
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 16.29880294799805,
            "unit": "%",
            "range": 19.303635655474693
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0018375397194176912,
            "unit": "s",
            "range": 0.0015047731576487422
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 51.5703285907216,
            "unit": "W",
            "range": 3.344858523422482
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 22.155092273835585,
            "unit": "%",
            "range": 13.53602296426989
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 16.30069694519043,
            "unit": "%",
            "range": 19.302890493776474
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.009795760735869408,
            "unit": "s",
            "range": 0.010268600657582283
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.564077542792496,
            "unit": "W",
            "range": 3.354034859215925
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 22.14764316500045,
            "unit": "%",
            "range": 13.530839525169128
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.313782119750975,
            "unit": "%",
            "range": 19.297787269319976
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0037860870361328125,
            "unit": "s",
            "range": 0.001856008660979569
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.55900029610075,
            "unit": "W",
            "range": 3.360861274504072
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 22.144700916487018,
            "unit": "%",
            "range": 13.528898709519552
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.324054527282716,
            "unit": "%",
            "range": 19.293836041798798
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0014354705344885588,
            "unit": "s",
            "range": 0.0006677072960883379
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.55806266857911,
            "unit": "W",
            "range": 3.3622838701577527
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 22.143611868533533,
            "unit": "%",
            "range": 13.52801327438862
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.32603063583374,
            "unit": "%",
            "range": 19.293081494769137
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 72.75120544433594,
            "unit": "s",
            "range": 10.22211742401123
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 87.99393308457934,
            "unit": "W",
            "range": 7.11173173218786
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 20.080137089728744,
            "unit": "%",
            "range": 11.171567823872769
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 16.156196498870848,
            "unit": "%",
            "range": 13.587541547414821
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.001224517822265625,
            "unit": "s",
            "range": 0.0005869900924153626
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.67883418401406,
            "unit": "W",
            "range": 3.371681111803326
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 19.101003681864807,
            "unit": "%",
            "range": 13.064362492410353
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 10.12115478515625,
            "unit": "%",
            "range": 2.71169383686813
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 27.22268295288086,
            "unit": "s",
            "range": 2.1849207878112793
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 1.5652198746392578,
            "unit": "kJ",
            "range": 0.2521411009209757
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5291236639022827,
            "unit": "s",
            "range": 0.09130486845970154
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 15.890759183255938,
            "unit": "W",
            "range": 14.621856580797465
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 32.754474825272816,
            "unit": "%",
            "range": 1.5797409019648219
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 1.55914306640625,
            "unit": "%",
            "range": 0.43572262352865454
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5053476095199585,
            "unit": "s",
            "range": 0.07785956561565399
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 15.818158042476867,
            "unit": "W",
            "range": 14.68703414527611
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 33.74072262170039,
            "unit": "%",
            "range": 2.8063102646068585
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 1.55914306640625,
            "unit": "%",
            "range": 0.43572262352865454
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.3316848278045654,
            "unit": "s",
            "range": 0.2083846926689148
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 41.73167924021085,
            "unit": "W",
            "range": 15.78867461095859
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 33.514057312688955,
            "unit": "%",
            "range": 2.8675977414109264
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 1.56427001953125,
            "unit": "%",
            "range": 0.43338805122187496
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.1002511978149414,
            "unit": "s",
            "range": 0.2582722306251526
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 45.90357418237906,
            "unit": "W",
            "range": 13.462053693311884
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 33.58541331464233,
            "unit": "%",
            "range": 3.089009137196712
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 1.56768798828125,
            "unit": "%",
            "range": 0.43212890625
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.0805604457855225,
            "unit": "s",
            "range": 0.28654778003692627
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 28.149857645370247,
            "unit": "W",
            "range": 27.069209907412887
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 33.19942603700165,
            "unit": "%",
            "range": 2.9175233553977424
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 1.53167724609375,
            "unit": "%",
            "range": 0.45692509453523056
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.17172804474830627,
            "unit": "s",
            "range": 0.03267290070652962
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 19.479560028259648,
            "unit": "W",
            "range": 16.77193748249562
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 33.816329673768266,
            "unit": "%",
            "range": 2.7741056130286377
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.22423474490642548,
            "unit": "s",
            "range": 0.0550515241920948
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 19.476499227963,
            "unit": "W",
            "range": 16.77523263148167
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 33.92388945427287,
            "unit": "%",
            "range": 2.8273263271445535
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.801439642906189,
            "unit": "s",
            "range": 0.3345257043838501
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 36.466573199340885,
            "unit": "W",
            "range": 21.719763263211934
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 34.36424967195981,
            "unit": "%",
            "range": 3.1386464270968752
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 2.252080202102661,
            "unit": "s",
            "range": 0.2971876859664917
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 38.005387738661554,
            "unit": "W",
            "range": 11.817327077387755
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 34.46150643582016,
            "unit": "%",
            "range": 3.1590363240501502
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.9149844646453857,
            "unit": "s",
            "range": 0.32228928804397583
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 37.47265174603543,
            "unit": "W",
            "range": 18.428336552705243
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 34.310239631573765,
            "unit": "%",
            "range": 3.63249741201671
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.78196120262146,
            "unit": "s",
            "range": 0.1765340268611908
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 15.892926479802984,
            "unit": "W",
            "range": 14.79213118139459
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 34.38994630539768,
            "unit": "%",
            "range": 4.2097493494946425
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.8699632883071899,
            "unit": "s",
            "range": 0.20223693549633026
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 16.76007632006317,
            "unit": "W",
            "range": 14.622779430743012
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 34.323328842013474,
            "unit": "%",
            "range": 3.9248438646835506
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.035616446286439896,
            "unit": "s",
            "range": 0.015228255651891232
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.884963691623705,
            "unit": "W",
            "range": 14.864059240733933
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 34.12162601436858,
            "unit": "%",
            "range": 3.38804990192346
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.007337546441704035,
            "unit": "s",
            "range": 0.0031822826713323593
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.885234926922427,
            "unit": "W",
            "range": 14.866067593030678
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 34.10854527270701,
            "unit": "%",
            "range": 3.368942565431922
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0024782419204711914,
            "unit": "s",
            "range": 0.0008984829182736576
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 15.885322956536248,
            "unit": "W",
            "range": 14.866455222843564
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 34.10585187350874,
            "unit": "%",
            "range": 3.3652601759040772
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.49566650390625,
            "unit": "%",
            "range": 0.504150390625
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 9.196077346801758,
            "unit": "s",
            "range": 1.3017467260360718
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 53.19984799841639,
            "unit": "W",
            "range": 11.716065728087878
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 34.520206973119585,
            "unit": "%",
            "range": 3.823210925723654
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 1.533538669347763,
            "unit": "%",
            "range": 0.36941817762108087
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0046212198212742805,
            "unit": "s",
            "range": 0.0024382879491895437
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 16.099381209378326,
            "unit": "W",
            "range": 14.53557029009554
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 35.01080587137886,
            "unit": "%",
            "range": 4.182493638896648
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 1.5590690135955811,
            "unit": "%",
            "range": 0.43562329387276183
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Claudia Comito",
            "username": "ClaudiaComito",
            "email": "39374113+ClaudiaComito@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8b878908579481b6025739afe6f249ffae81a363",
          "message": "Distributed Fast Fourier Transforms (#1218)\n\n* implement fftn, first draft\r\n\r\n* implement general , add\r\n\r\n* split fft_op and fftn_op, implement inverse and real fft\r\n\r\n* add TODO hermitian fft\r\n\r\n* add fft tests first draft\r\n\r\n* implement tests first draft\r\n\r\n* update fft/__init__.py\r\n\r\n* expand tests fft\r\n\r\n* expand tests ffftn\r\n\r\n* expand tests and fix errors\r\n\r\n* add Hermitian FFTs\r\n\r\n* heat/fft/tests/test_fft.py\r\n\r\n* raise IndexError, not ValueError, when axes don't match dimensions\r\n\r\n* expand tests\r\n\r\n* edit error message for better understanding\r\n\r\n* replace == with allclose for 2D FFTs\r\n\r\n* fix error\r\n\r\n* remove redundant communication\r\n\r\n* remove redundant tests\r\n\r\n* fix bug in axes handling\r\n\r\n* test hermitian FFT\r\n\r\n* cast numpy fft2 to complex64\r\n\r\n* expand tests\r\n\r\n* edit error messages\r\n\r\n* remove unnecessary axis check\r\n\r\n* test inverse ffts as well\r\n\r\n* skip comm-intensive tests on gpu\r\n\r\n* introduce helper functions for real fft operations\r\n\r\n* fix output shape wrt Nyquist frequency\r\n\r\n* double precision tests\r\n\r\n* debugging: introduce synchronization\r\n\r\n* debugging\r\n\r\n* debugging\r\n\r\n* debugging\r\n\r\n* specify default even size of last fft dim for inverse real ops\r\n\r\n* add tests\r\n\r\n* fix output shape calc when input is real\r\n\r\n* expand tests\r\n\r\n* expand tests\r\n\r\n* expand tests\r\n\r\n* add ihfft2, ihfft\r\n\r\n* expand tests\r\n\r\n* implement fftfreq, fftshift operations and tests\r\n\r\n* fix local output dtype mismatch when local input tensor is empty\r\n\r\n* remove print statements\r\n\r\n* expand tests\r\n\r\n* simplify dealing with multi-axis real FFT\r\n\r\n* cannot be a list\r\n\r\n* update documentation\r\n\r\n* edit docs\r\n\r\n---------\r\n\r\nCo-authored-by: Fabian Hoppe <112093564+mrfh92@users.noreply.github.com>",
          "timestamp": "2023-11-27T09:06:00Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/8b878908579481b6025739afe6f249ffae81a363"
        },
        "date": 1701080656850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 126.55690002441406,
            "unit": "s",
            "range": 10.885071754455566
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 13.317669718412498,
            "unit": "kJ",
            "range": 1.7254877159307167
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.007017500698566437,
            "unit": "s",
            "range": 0.014469628222286701
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 54.964810161795015,
            "unit": "W",
            "range": 10.1022880838238
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 86.41626709372461,
            "unit": "%",
            "range": 7.497791345216131
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 15.351088809967042,
            "unit": "%",
            "range": 19.192392340476946
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0004654075892176479,
            "unit": "s",
            "range": 0.0001069295612978749
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 54.94432497811705,
            "unit": "W",
            "range": 9.783688834318502
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 86.16538367201522,
            "unit": "%",
            "range": 7.539155916320975
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 15.364691162109375,
            "unit": "%",
            "range": 19.188251599276338
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.36662405729293823,
            "unit": "s",
            "range": 0.06212824210524559
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 54.789927349210394,
            "unit": "W",
            "range": 8.03458462167798
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 84.38511427607698,
            "unit": "%",
            "range": 8.196118409692257
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 15.414242172241211,
            "unit": "%",
            "range": 19.17389448017374
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.33710819482803345,
            "unit": "s",
            "range": 0.05647256225347519
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 54.27125536689404,
            "unit": "W",
            "range": 5.130430954103697
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 81.42570468391419,
            "unit": "%",
            "range": 10.28865153902457
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 15.43487548828125,
            "unit": "%",
            "range": 19.168252896584946
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.7317015528678894,
            "unit": "s",
            "range": 0.10194408893585205
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 53.57633576792499,
            "unit": "W",
            "range": 2.0042663917162855
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 79.19429186332415,
            "unit": "%",
            "range": 12.407264714250434
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 15.43493938446045,
            "unit": "%",
            "range": 19.16823573391179
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09326054155826569,
            "unit": "s",
            "range": 0.024135973304510117
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 53.89047302957954,
            "unit": "W",
            "range": 1.0499068696405878
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 78.73179690267051,
            "unit": "%",
            "range": 12.925253374186736
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 15.435420703887939,
            "unit": "%",
            "range": 19.168106511426483
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.16718649864196777,
            "unit": "s",
            "range": 0.016031010076403618
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 54.08111011374034,
            "unit": "W",
            "range": 0.965223635272922
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 78.71230914361438,
            "unit": "%",
            "range": 12.945706636861019
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 15.435614776611327,
            "unit": "%",
            "range": 19.16805443817596
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.836248397827148,
            "unit": "s",
            "range": 1.1489020586013794
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 100.73606495475187,
            "unit": "W",
            "range": 12.531119788839884
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 79.370602533506,
            "unit": "%",
            "range": 12.682345772899973
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 15.461884784698487,
            "unit": "%",
            "range": 19.241974404027406
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 22.70916748046875,
            "unit": "s",
            "range": 2.175236463546753
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 102.31592354782762,
            "unit": "W",
            "range": 10.145775694364547
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 78.61231208641762,
            "unit": "%",
            "range": 10.637750159345384
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 15.515170860290528,
            "unit": "%",
            "range": 19.39576181940875
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 22.523849487304688,
            "unit": "s",
            "range": 2.319485902786255
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 101.87091204869925,
            "unit": "W",
            "range": 10.930648654515428
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 75.89407987113074,
            "unit": "%",
            "range": 15.46850512535414
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 15.671880340576172,
            "unit": "%",
            "range": 19.616396955860086
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.0005409240839071572,
            "unit": "s",
            "range": 0.00021449185442179441
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 51.154759050453805,
            "unit": "W",
            "range": 2.1591165629087437
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 76.6130541690728,
            "unit": "%",
            "range": 20.724061786524725
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 15.879780483245849,
            "unit": "%",
            "range": 19.569106387222938
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0017173767555505037,
            "unit": "s",
            "range": 0.0008111553615890443
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 51.153369238642874,
            "unit": "W",
            "range": 2.156806192687828
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 76.6136691290199,
            "unit": "%",
            "range": 20.723875493794324
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 15.880762386322022,
            "unit": "%",
            "range": 19.568933518489512
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.010057449340820312,
            "unit": "s",
            "range": 0.004159245640039444
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.142825945238776,
            "unit": "W",
            "range": 2.14033427335182
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 76.6160218495481,
            "unit": "%",
            "range": 20.723072036592235
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 15.888562202453613,
            "unit": "%",
            "range": 19.56757321673783
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.005115509033203125,
            "unit": "s",
            "range": 0.0012135690776631236
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.135670314393636,
            "unit": "W",
            "range": 2.129335060934693
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 76.61732357720598,
            "unit": "%",
            "range": 20.722701114144403
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 15.893971824645996,
            "unit": "%",
            "range": 19.566645704917775
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0020324706565588713,
            "unit": "s",
            "range": 0.0006264792173169553
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 51.13282198693494,
            "unit": "W",
            "range": 2.1253981998784774
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 76.61795914955168,
            "unit": "%",
            "range": 20.72255046246034
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 15.894990158081054,
            "unit": "%",
            "range": 19.5664731667073
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 69.15199279785156,
            "unit": "s",
            "range": 8.972846031188965
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 105.46986372617525,
            "unit": "W",
            "range": 11.114564854112748
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 79.18146261469116,
            "unit": "%",
            "range": 11.755070574046954
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 15.886761951446534,
            "unit": "%",
            "range": 18.044435538089598
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0014335631858557463,
            "unit": "s",
            "range": 0.0005352057050913572
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 51.18145118580496,
            "unit": "W",
            "range": 1.5230140190223027
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 73.31179600788793,
            "unit": "%",
            "range": 12.895136185108
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 15.21514892578125,
            "unit": "%",
            "range": 19.23848092996984
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 26.99344825744629,
            "unit": "s",
            "range": 2.1779661178588867
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 2.973367084226953,
            "unit": "kJ",
            "range": 0.3980596050530741
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.5737065076828003,
            "unit": "s",
            "range": 0.07834877073764801
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 39.513828964962876,
            "unit": "W",
            "range": 16.193301459079382
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 5.75958251953125,
            "unit": "%",
            "range": 2.03591032207673
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5716551542282104,
            "unit": "s",
            "range": 0.11056706309318542
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 39.43630102183744,
            "unit": "W",
            "range": 16.122886742094575
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 5.75958251953125,
            "unit": "%",
            "range": 2.03591032207673
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.3594164848327637,
            "unit": "s",
            "range": 0.45271337032318115
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 88.22502684777655,
            "unit": "W",
            "range": 19.31471811875712
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 99.99956074969816,
            "unit": "%",
            "range": 0.0013177509055054772
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 5.76263427734375,
            "unit": "%",
            "range": 2.038341120567663
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.3526947498321533,
            "unit": "s",
            "range": 0.42737528681755066
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 84.78141256238618,
            "unit": "W",
            "range": 17.304371151531697
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 99.9962274193314,
            "unit": "%",
            "range": 0.007608835268156654
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 5.76690673828125,
            "unit": "%",
            "range": 2.041808344018959
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.3130582571029663,
            "unit": "s",
            "range": 0.1737460047006607
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 45.97251792724008,
            "unit": "W",
            "range": 22.873814098416016
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 5.76690673828125,
            "unit": "%",
            "range": 2.041808344018959
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.2198062688112259,
            "unit": "s",
            "range": 0.020033227279782295
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 36.48905556493929,
            "unit": "W",
            "range": 18.654936621538578
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 99.99840091269266,
            "unit": "%",
            "range": 0.004797261922004736
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 5.76690673828125,
            "unit": "%",
            "range": 2.041808344018959
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.2598941922187805,
            "unit": "s",
            "range": 0.030588407069444656
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 36.55401278356509,
            "unit": "W",
            "range": 18.748304156826368
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 99.99592862427932,
            "unit": "%",
            "range": 0.012214127162044975
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 5.76690673828125,
            "unit": "%",
            "range": 2.041808344018959
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.6031715869903564,
            "unit": "s",
            "range": 0.131510391831398
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 54.49391770812012,
            "unit": "W",
            "range": 21.804382710787102
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 99.99118318677127,
            "unit": "%",
            "range": 0.026450439686192338
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 5.76690673828125,
            "unit": "%",
            "range": 2.041808344018959
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.9454739093780518,
            "unit": "s",
            "range": 0.18878504633903503
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 74.0948644938335,
            "unit": "W",
            "range": 29.33905259274492
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 99.99384310152394,
            "unit": "%",
            "range": 0.018470695428183602
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 5.775529909133911,
            "unit": "%",
            "range": 2.0437859679616497
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.946387529373169,
            "unit": "s",
            "range": 0.20759515464305878
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 70.68423462455057,
            "unit": "W",
            "range": 20.538499367853994
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 99.98941197987158,
            "unit": "%",
            "range": 0.021837611463384168
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 5.82692277431488,
            "unit": "%",
            "range": 2.0622742096778874
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6449423432350159,
            "unit": "s",
            "range": 0.07630225270986557
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 37.04503328719161,
            "unit": "W",
            "range": 19.002548275318457
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 99.99037999688551,
            "unit": "%",
            "range": 0.023033400112747016
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 5.875543653964996,
            "unit": "%",
            "range": 2.089119269594205
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.675286591053009,
            "unit": "s",
            "range": 0.05388231202960014
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 38.5991844686702,
            "unit": "W",
            "range": 17.550115998233967
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 99.99857019476626,
            "unit": "%",
            "range": 0.004289415701209976
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 5.890258967876434,
            "unit": "%",
            "range": 2.0808057962735074
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.04035813733935356,
            "unit": "s",
            "range": 0.018291765823960304
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 39.835286763427625,
            "unit": "W",
            "range": 16.890926921839434
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 5.900794985890388,
            "unit": "%",
            "range": 2.0549340188311254
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.012519478797912598,
            "unit": "s",
            "range": 0.006705411709845066
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 39.906779391008165,
            "unit": "W",
            "range": 16.877574898126948
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 5.91492173075676,
            "unit": "%",
            "range": 2.020501115254683
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.00300178537145257,
            "unit": "s",
            "range": 0.002106962027028203
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 39.93025960427133,
            "unit": "W",
            "range": 16.874393395959068
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 5.921336236596107,
            "unit": "%",
            "range": 2.004966744437327
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 9.17253303527832,
            "unit": "s",
            "range": 1.4114501476287842
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 108.69777172368879,
            "unit": "W",
            "range": 14.244552205435237
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 99.99503037886186,
            "unit": "%",
            "range": 0.011194081945285896
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 6.270264613628387,
            "unit": "%",
            "range": 1.4065196396605266
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.00434145936742425,
            "unit": "s",
            "range": 0.0024140356108546257
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 45.12751449218392,
            "unit": "W",
            "range": 12.77645816035297
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 100,
            "unit": "%",
            "range": 0
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 6.07330322265625,
            "unit": "%",
            "range": 2.0292216958006732
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Tarnawa",
            "username": "mtar",
            "email": "m.tarnawa@fz-juelich.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa24cc644e7a5e25e5e683148c93579b762abf40",
          "message": "Implement workflow to monitor stale issues/PRs (#1283)\n\n* Create inactivity.yml\r\n\r\n* Update inactivity.yml\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n* Update .github/workflows/inactivity.yml\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Claudia Comito <39374113+ClaudiaComito@users.noreply.github.com>",
          "timestamp": "2023-11-30T13:47:49Z",
          "url": "https://github.com/helmholtz-analytics/heat/commit/aa24cc644e7a5e25e5e683148c93579b762abf40"
        },
        "date": 1701354242358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "heat_benchmarks_N1_GPU - RUNTIME",
            "value": 119.40837097167969,
            "unit": "s",
            "range": 12.695619583129883
          },
          {
            "name": "heat_benchmarks_N1_GPU - ENERGY",
            "value": 5.70388349609375,
            "unit": "kJ",
            "range": 0.703542413168049
          },
          {
            "name": "matmul_split_0_N1_GPU - RUNTIME",
            "value": 0.0066878916695714,
            "unit": "s",
            "range": 0.016550010070204735
          },
          {
            "name": "matmul_split_0_N1_GPU - POWER",
            "value": 50.968283459019595,
            "unit": "W",
            "range": 10.869420056633327
          },
          {
            "name": "matmul_split_0_N1_GPU - CPU_UTIL",
            "value": 80.12291146743445,
            "unit": "%",
            "range": 2.684402331708025
          },
          {
            "name": "matmul_split_0_N1_GPU - GPU_UTIL",
            "value": 7.494762682914734,
            "unit": "%",
            "range": 1.9601779739485736
          },
          {
            "name": "matmul_split_1_N1_GPU - RUNTIME",
            "value": 0.0008475877111777663,
            "unit": "s",
            "range": 0.0012543235206976533
          },
          {
            "name": "matmul_split_1_N1_GPU - POWER",
            "value": 51.07226053223495,
            "unit": "W",
            "range": 10.393570305004031
          },
          {
            "name": "matmul_split_1_N1_GPU - CPU_UTIL",
            "value": 80.06894024480398,
            "unit": "%",
            "range": 2.8200649287428443
          },
          {
            "name": "matmul_split_1_N1_GPU - GPU_UTIL",
            "value": 7.5093554019927975,
            "unit": "%",
            "range": 1.9183619789957178
          },
          {
            "name": "qr_split_0_N1_GPU - RUNTIME",
            "value": 0.36081767082214355,
            "unit": "s",
            "range": 0.06663893163204193
          },
          {
            "name": "qr_split_0_N1_GPU - POWER",
            "value": 51.55271838033381,
            "unit": "W",
            "range": 7.829330953223675
          },
          {
            "name": "qr_split_0_N1_GPU - CPU_UTIL",
            "value": 79.57771549802659,
            "unit": "%",
            "range": 4.32538521591304
          },
          {
            "name": "qr_split_0_N1_GPU - GPU_UTIL",
            "value": 7.587315940856934,
            "unit": "%",
            "range": 1.6995979481097674
          },
          {
            "name": "qr_split_1_N1_GPU - RUNTIME",
            "value": 0.32980847358703613,
            "unit": "s",
            "range": 0.05358586832880974
          },
          {
            "name": "qr_split_1_N1_GPU - POWER",
            "value": 51.822386169160644,
            "unit": "W",
            "range": 4.605337829898401
          },
          {
            "name": "qr_split_1_N1_GPU - CPU_UTIL",
            "value": 78.69582525175294,
            "unit": "%",
            "range": 7.806751267743484
          },
          {
            "name": "qr_split_1_N1_GPU - GPU_UTIL",
            "value": 7.685315656661987,
            "unit": "%",
            "range": 1.4326919432122232
          },
          {
            "name": "lanczos_N1_GPU - RUNTIME",
            "value": 0.6971983909606934,
            "unit": "s",
            "range": 0.12437999248504639
          },
          {
            "name": "lanczos_N1_GPU - POWER",
            "value": 50.87364377980802,
            "unit": "W",
            "range": 2.2646390494251
          },
          {
            "name": "lanczos_N1_GPU - CPU_UTIL",
            "value": 78.38629081402237,
            "unit": "%",
            "range": 11.750386941348197
          },
          {
            "name": "lanczos_N1_GPU - GPU_UTIL",
            "value": 7.702353072166443,
            "unit": "%",
            "range": 1.3994277634000958
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - RUNTIME",
            "value": 0.09199811518192291,
            "unit": "s",
            "range": 0.030319642275571823
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - POWER",
            "value": 50.79733362620375,
            "unit": "W",
            "range": 2.3654701023455758
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - CPU_UTIL",
            "value": 78.80915735776549,
            "unit": "%",
            "range": 12.62835257487228
          },
          {
            "name": "hierachical_svd_rank_N1_GPU - GPU_UTIL",
            "value": 7.7034773349761965,
            "unit": "%",
            "range": 1.3984162736066
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - RUNTIME",
            "value": 0.15782751142978668,
            "unit": "s",
            "range": 0.026141701266169548
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - POWER",
            "value": 50.9023174339465,
            "unit": "W",
            "range": 2.3599517779214016
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - CPU_UTIL",
            "value": 78.94900021665168,
            "unit": "%",
            "range": 12.529620604129382
          },
          {
            "name": "hierachical_svd_tol_N1_GPU - GPU_UTIL",
            "value": 7.703679203987122,
            "unit": "%",
            "range": 1.3978171356685885
          },
          {
            "name": "kmeans_N1_GPU - RUNTIME",
            "value": 9.240907669067383,
            "unit": "s",
            "range": 1.4798707962036133
          },
          {
            "name": "kmeans_N1_GPU - POWER",
            "value": 48.831753245507564,
            "unit": "W",
            "range": 2.1111849260459477
          },
          {
            "name": "kmeans_N1_GPU - CPU_UTIL",
            "value": 78.41858806571516,
            "unit": "%",
            "range": 10.391927041786621
          },
          {
            "name": "kmeans_N1_GPU - GPU_UTIL",
            "value": 7.704399585723877,
            "unit": "%",
            "range": 1.3934015061691742
          },
          {
            "name": "kmedians_N1_GPU - RUNTIME",
            "value": 21.46954917907715,
            "unit": "s",
            "range": 3.3136000633239746
          },
          {
            "name": "kmedians_N1_GPU - POWER",
            "value": 47.55446034407292,
            "unit": "W",
            "range": 1.9762709611365454
          },
          {
            "name": "kmedians_N1_GPU - CPU_UTIL",
            "value": 79.34405081918875,
            "unit": "%",
            "range": 12.206706949920322
          },
          {
            "name": "kmedians_N1_GPU - GPU_UTIL",
            "value": 7.648647117614746,
            "unit": "%",
            "range": 1.3592966649222809
          },
          {
            "name": "kmedoids_N1_GPU - RUNTIME",
            "value": 20.667892456054688,
            "unit": "s",
            "range": 2.778954267501831
          },
          {
            "name": "kmedoids_N1_GPU - POWER",
            "value": 47.66034599076432,
            "unit": "W",
            "range": 1.893652937569569
          },
          {
            "name": "kmedoids_N1_GPU - CPU_UTIL",
            "value": 82.01530145100224,
            "unit": "%",
            "range": 10.95536353477048
          },
          {
            "name": "kmedoids_N1_GPU - GPU_UTIL",
            "value": 7.641252756118774,
            "unit": "%",
            "range": 1.3422939777374268
          },
          {
            "name": "reshape_N1_GPU - RUNTIME",
            "value": 0.00054931640625,
            "unit": "s",
            "range": 0.00019655872893054038
          },
          {
            "name": "reshape_N1_GPU - POWER",
            "value": 47.70667625620035,
            "unit": "W",
            "range": 1.8759255738157175
          },
          {
            "name": "reshape_N1_GPU - CPU_UTIL",
            "value": 77.6580507847373,
            "unit": "%",
            "range": 11.000518760414531
          },
          {
            "name": "reshape_N1_GPU - GPU_UTIL",
            "value": 7.724739503860474,
            "unit": "%",
            "range": 1.091833734512329
          },
          {
            "name": "concatenate_N1_GPU - RUNTIME",
            "value": 0.0018398284446448088,
            "unit": "s",
            "range": 0.0006875689723528922
          },
          {
            "name": "concatenate_N1_GPU - POWER",
            "value": 47.7067963629705,
            "unit": "W",
            "range": 1.8760177236260507
          },
          {
            "name": "concatenate_N1_GPU - CPU_UTIL",
            "value": 77.6557905125435,
            "unit": "%",
            "range": 11.000750881197844
          },
          {
            "name": "concatenate_N1_GPU - GPU_UTIL",
            "value": 7.725827312469482,
            "unit": "%",
            "range": 1.0885703086853027
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.008488083258271217,
            "unit": "s",
            "range": 0.004618176259100437
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - POWER",
            "value": 47.70743479156708,
            "unit": "W",
            "range": 1.8765215059981257
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 77.64072560670198,
            "unit": "%",
            "range": 11.00257159393051
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 7.733374404907226,
            "unit": "%",
            "range": 1.0659290313720704
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0034683228004723787,
            "unit": "s",
            "range": 0.0010866408701986074
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - POWER",
            "value": 47.70772893861968,
            "unit": "W",
            "range": 1.8767486568506575
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 77.63302469635403,
            "unit": "%",
            "range": 11.002392439112809
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 7.738512420654297,
            "unit": "%",
            "range": 1.0505149841308594
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 0.0015960693126544356,
            "unit": "s",
            "range": 0.0006577519816346467
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - POWER",
            "value": 47.70786138909523,
            "unit": "W",
            "range": 1.8768472428725578
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 77.62956105633104,
            "unit": "%",
            "range": 11.002841051352739
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 7.739448404312133,
            "unit": "%",
            "range": 1.0477070331573486
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - RUNTIME",
            "value": 65.69216918945312,
            "unit": "s",
            "range": 9.115964889526367
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - POWER",
            "value": 47.880603297035094,
            "unit": "W",
            "range": 1.697523855213048
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - CPU_UTIL",
            "value": 78.51193041477755,
            "unit": "%",
            "range": 11.332541014099098
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N1_GPU - GPU_UTIL",
            "value": 8.092453861236573,
            "unit": "%",
            "range": 0.03430347227936351
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - RUNTIME",
            "value": 0.0014701843028888106,
            "unit": "s",
            "range": 0.0005117731634527445
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - POWER",
            "value": 48.47797797950291,
            "unit": "W",
            "range": 1.492652944331429
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - CPU_UTIL",
            "value": 79.0512927983481,
            "unit": "%",
            "range": 12.454118400670875
          },
          {
            "name": "apply_inplace_normalizer_N1_GPU - GPU_UTIL",
            "value": 8.15460205078125,
            "unit": "%",
            "range": 0.19775390625
          },
          {
            "name": "heat_benchmarks_N4_CPU - RUNTIME",
            "value": 25.70947265625,
            "unit": "s",
            "range": 2.110316514968872
          },
          {
            "name": "heat_benchmarks_N4_CPU - ENERGY",
            "value": 0.26456218872070314,
            "unit": "kJ",
            "range": 0.24111720353696403
          },
          {
            "name": "matmul_split_0_N4_CPU - RUNTIME",
            "value": 0.6129639744758606,
            "unit": "s",
            "range": 0.1496773511171341
          },
          {
            "name": "matmul_split_0_N4_CPU - POWER",
            "value": 7.39884296777836,
            "unit": "W",
            "range": 0.7318433929063448
          },
          {
            "name": "matmul_split_0_N4_CPU - CPU_UTIL",
            "value": 94.1951596914594,
            "unit": "%",
            "range": 2.9436431861749086
          },
          {
            "name": "matmul_split_0_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          },
          {
            "name": "matmul_split_1_N4_CPU - RUNTIME",
            "value": 0.5802478194236755,
            "unit": "s",
            "range": 0.05842411145567894
          },
          {
            "name": "matmul_split_1_N4_CPU - POWER",
            "value": 8.056973760569637,
            "unit": "W",
            "range": 2.181284755900576
          },
          {
            "name": "matmul_split_1_N4_CPU - CPU_UTIL",
            "value": 92.9100082727231,
            "unit": "%",
            "range": 3.60243873959215
          },
          {
            "name": "matmul_split_1_N4_CPU - GPU_UTIL",
            "value": 0.7178921863436699,
            "unit": "%",
            "range": 0.04338603168725967
          },
          {
            "name": "qr_split_0_N4_CPU - RUNTIME",
            "value": 3.186725378036499,
            "unit": "s",
            "range": 0.17599405348300934
          },
          {
            "name": "qr_split_0_N4_CPU - POWER",
            "value": 10.397967703519555,
            "unit": "W",
            "range": 9.703161476035854
          },
          {
            "name": "qr_split_0_N4_CPU - CPU_UTIL",
            "value": 93.34149181606308,
            "unit": "%",
            "range": 3.425669637913552
          },
          {
            "name": "qr_split_0_N4_CPU - GPU_UTIL",
            "value": 0.7700019687414169,
            "unit": "%",
            "range": 0.19971537888050078
          },
          {
            "name": "qr_split_1_N4_CPU - RUNTIME",
            "value": 3.2217342853546143,
            "unit": "s",
            "range": 0.27961084246635437
          },
          {
            "name": "qr_split_1_N4_CPU - POWER",
            "value": 10.644564371201898,
            "unit": "W",
            "range": 10.622890888229445
          },
          {
            "name": "qr_split_1_N4_CPU - CPU_UTIL",
            "value": 93.4033940022375,
            "unit": "%",
            "range": 3.6368869857030184
          },
          {
            "name": "qr_split_1_N4_CPU - GPU_UTIL",
            "value": 0.7688272148370743,
            "unit": "%",
            "range": 0.19619111716747284
          },
          {
            "name": "lanczos_N4_CPU - RUNTIME",
            "value": 1.1876822710037231,
            "unit": "s",
            "range": 0.132744699716568
          },
          {
            "name": "lanczos_N4_CPU - POWER",
            "value": 10.82063966456283,
            "unit": "W",
            "range": 10.640864706547195
          },
          {
            "name": "lanczos_N4_CPU - CPU_UTIL",
            "value": 92.53562777230346,
            "unit": "%",
            "range": 2.7596250617521814
          },
          {
            "name": "lanczos_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - RUNTIME",
            "value": 0.21027138829231262,
            "unit": "s",
            "range": 0.03366953134536743
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - POWER",
            "value": 10.86356169484807,
            "unit": "W",
            "range": 10.632276169940004
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - CPU_UTIL",
            "value": 92.20738585764109,
            "unit": "%",
            "range": 2.733416811857558
          },
          {
            "name": "hierachical_svd_rank_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - RUNTIME",
            "value": 0.26072588562965393,
            "unit": "s",
            "range": 0.039278510957956314
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - POWER",
            "value": 10.829572575234435,
            "unit": "W",
            "range": 10.644400945825511
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - CPU_UTIL",
            "value": 91.98086424472544,
            "unit": "%",
            "range": 2.8399707329394617
          },
          {
            "name": "hierachical_svd_tol_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "kmeans_N4_CPU - RUNTIME",
            "value": 1.620017647743225,
            "unit": "s",
            "range": 0.1415024846792221
          },
          {
            "name": "kmeans_N4_CPU - POWER",
            "value": 10.724486895713834,
            "unit": "W",
            "range": 10.690487183908246
          },
          {
            "name": "kmeans_N4_CPU - CPU_UTIL",
            "value": 91.54108567614504,
            "unit": "%",
            "range": 3.0366413714228555
          },
          {
            "name": "kmeans_N4_CPU - GPU_UTIL",
            "value": 0.768135130405426,
            "unit": "%",
            "range": 0.19411486387252808
          },
          {
            "name": "kmedians_N4_CPU - RUNTIME",
            "value": 1.9239133596420288,
            "unit": "s",
            "range": 0.14618688821792603
          },
          {
            "name": "kmedians_N4_CPU - POWER",
            "value": 10.675695306180566,
            "unit": "W",
            "range": 10.693639652404771
          },
          {
            "name": "kmedians_N4_CPU - CPU_UTIL",
            "value": 91.82872038996963,
            "unit": "%",
            "range": 2.857481146275504
          },
          {
            "name": "kmedians_N4_CPU - GPU_UTIL",
            "value": 0.7714668035507202,
            "unit": "%",
            "range": 0.20410988330841065
          },
          {
            "name": "kmedoids_N4_CPU - RUNTIME",
            "value": 1.8745616674423218,
            "unit": "s",
            "range": 0.13649927079677582
          },
          {
            "name": "kmedoids_N4_CPU - POWER",
            "value": 10.675313885648022,
            "unit": "W",
            "range": 10.72320122206125
          },
          {
            "name": "kmedoids_N4_CPU - CPU_UTIL",
            "value": 93.1246402982071,
            "unit": "%",
            "range": 3.0235385514013116
          },
          {
            "name": "kmedoids_N4_CPU - GPU_UTIL",
            "value": 0.7716054230928421,
            "unit": "%",
            "range": 0.20452574193477632
          },
          {
            "name": "reshape_N4_CPU - RUNTIME",
            "value": 0.6130874156951904,
            "unit": "s",
            "range": 0.06188046187162399
          },
          {
            "name": "reshape_N4_CPU - POWER",
            "value": 10.69846746021771,
            "unit": "W",
            "range": 10.68668083767328
          },
          {
            "name": "reshape_N4_CPU - CPU_UTIL",
            "value": 93.68421338222159,
            "unit": "%",
            "range": 3.4414473609278753
          },
          {
            "name": "reshape_N4_CPU - GPU_UTIL",
            "value": 0.7683437556028366,
            "unit": "%",
            "range": 0.1947407394647598
          },
          {
            "name": "concatenate_N4_CPU - RUNTIME",
            "value": 0.6186472177505493,
            "unit": "s",
            "range": 0.03379460424184799
          },
          {
            "name": "concatenate_N4_CPU - POWER",
            "value": 10.698451090155274,
            "unit": "W",
            "range": 10.736623127364687
          },
          {
            "name": "concatenate_N4_CPU - CPU_UTIL",
            "value": 93.70018950607665,
            "unit": "%",
            "range": 3.8112836448826424
          },
          {
            "name": "concatenate_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.034012604504823685,
            "unit": "s",
            "range": 0.006075143348425627
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - POWER",
            "value": 10.700571600317536,
            "unit": "W",
            "range": 10.748565555173947
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 93.72867178036067,
            "unit": "%",
            "range": 3.9655026626854695
          },
          {
            "name": "apply_inplace_standard_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.007005023770034313,
            "unit": "s",
            "range": 0.002029992174357176
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - POWER",
            "value": 10.700892481733423,
            "unit": "W",
            "range": 10.748451945629833
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 93.73257026222038,
            "unit": "%",
            "range": 3.9707026497380085
          },
          {
            "name": "apply_inplace_min_max_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 0.0031262158881872892,
            "unit": "s",
            "range": 0.001662026741541922
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - POWER",
            "value": 10.700934042776371,
            "unit": "W",
            "range": 10.748437418475802
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 93.7336843618564,
            "unit": "%",
            "range": 3.9724176377104983
          },
          {
            "name": "apply_inplace_max_abs_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 0.76812744140625,
            "unit": "%",
            "range": 0.194091796875
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - RUNTIME",
            "value": 8.465907096862793,
            "unit": "s",
            "range": 0.4551989734172821
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - POWER",
            "value": 10.208122554398265,
            "unit": "W",
            "range": 9.250296306042191
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - CPU_UTIL",
            "value": 93.57668256105029,
            "unit": "%",
            "range": 3.3250621816601917
          },
          {
            "name": "apply_inplace_robust_scaler_and_inverse_N4_CPU - GPU_UTIL",
            "value": 0.72930908203125,
            "unit": "%",
            "range": 0.07763671875
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - RUNTIME",
            "value": 0.0037809847854077816,
            "unit": "s",
            "range": 0.0015535055426880717
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - POWER",
            "value": 7.375957863049949,
            "unit": "W",
            "range": 0.6583648972510667
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - CPU_UTIL",
            "value": 93.7421368006359,
            "unit": "%",
            "range": 4.160715058435
          },
          {
            "name": "apply_inplace_normalizer_N4_CPU - GPU_UTIL",
            "value": 0.70343017578125,
            "unit": "%",
            "range": 0
          }
        ]
      }
    ]
  }
}