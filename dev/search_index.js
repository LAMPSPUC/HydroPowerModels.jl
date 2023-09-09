var documenterSearchIndex = {"docs":
[{"location":"examples/case3_cmp_formulations/#Example-Case-3-Comparing-Formulations-Year-Planning","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"author : Andrew Rosemberg ","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"date : 21th Feb 2019 ","category":"page"},{"location":"examples/case3_cmp_formulations/#Introduction","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Introduction","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"This an example of the HydroPowerModels package for solving a simple stochastic case with the following specifications: ","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"- 3 Buses - 3 Lines - 2 Generators - 1 Reservoir and Hydrogenerator \n\n- 3 Scenarios - 12 Stages \n\n- DC,SOC and AC Formulations","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"Simulation's results will be shown in tables to facilitate comparison. Each formulation will have its own table where the columns will be named according to the variables of the problem: ","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"- \"[variable type]_[index]_[quantile]\".","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"Variable types in this example:","category":"page"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"* \"hpg\": Hydro active power generation.\n\n* \"pg\": Termo active power generation.\n\n* \"pf\": Active power flow.\n\n* \"va\": Voltage angle.\n\n* \"pg\": Termo active power generation.\n\n* \"volume\": Reservoir volume.","category":"page"},{"location":"examples/case3_cmp_formulations/#Results","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Results","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/#Table-AC","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Table AC","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"\n<table><tr><th>hpg_1_25.0&#37;</th><th>hpg_1_50.0&#37;</th><th>hpg_1_75.0&#37;</th><th>pf_1_25.0&#37;</th><th>pf_1_50.0&#37;</th><th>pf_1_75.0&#37;</th><th>pf_2_25.0&#37;</th><th>pf_2_50.0&#37;</th><th>pf_2_75.0&#37;</th><th>pf_3_25.0&#37;</th><th>pf_3_50.0&#37;</th><th>pf_3_75.0&#37;</th><th>pg_1_25.0&#37;</th><th>pg_1_50.0&#37;</th><th>pg_1_75.0&#37;</th><th>pg_2_25.0&#37;</th><th>pg_2_50.0&#37;</th><th>pg_2_75.0&#37;</th><th>va_1_25.0&#37;</th><th>va_1_50.0&#37;</th><th>va_1_75.0&#37;</th><th>va_2_25.0&#37;</th><th>va_2_50.0&#37;</th><th>va_2_75.0&#37;</th><th>va_3_25.0&#37;</th><th>va_3_50.0&#37;</th><th>va_3_75.0&#37;</th><th>volume_1_25.0&#37;</th><th>volume_1_50.0&#37;</th><th>volume_1_75.0&#37;</th></tr><tr><td>42.0</td><td>42.0</td><td>65.0</td><td>39.0</td><td>39.0</td><td>46.0</td><td>-62.0</td><td>-62.0</td><td>-55.0</td><td>3.1</td><td>3.1</td><td>19.0</td><td>37.0</td><td>60.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-2.8999999999999997e-35</td><td>0.0</td><td>3.5999999999999997e-35</td><td>-0.16</td><td>-0.026</td><td>-0.026</td><td>-0.41</td><td>-0.41</td><td>-0.4</td><td>88.0</td><td>88.0</td><td>100.0</td></tr><tr><td>42.0</td><td>43.0</td><td>52.0</td><td>39.0</td><td>39.0</td><td>42.0</td><td>-62.0</td><td>-62.0</td><td>-59.0</td><td>3.1</td><td>3.9</td><td>9.6</td><td>51.0</td><td>59.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-1.9999999999999997e-31</td><td>0.0</td><td>5.7e-32</td><td>-0.083</td><td>-0.033</td><td>-0.026</td><td>-0.41</td><td>-0.41</td><td>-0.4</td><td>80.0</td><td>110.0</td><td>120.0</td></tr><tr><td>42.0</td><td>42.0</td><td>48.0</td><td>39.0</td><td>39.0</td><td>41.0</td><td>-62.0</td><td>-62.0</td><td>-60.0</td><td>3.1</td><td>3.1</td><td>7.5</td><td>54.0</td><td>60.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-1.5e-31</td><td>0.0</td><td>6.6e-35</td><td>-0.065</td><td>-0.026</td><td>-0.026</td><td>-0.41</td><td>-0.41</td><td>-0.39</td><td>97.0</td><td>120.0</td><td>140.0</td></tr><tr><td>42.0</td><td>45.0</td><td>51.0</td><td>39.0</td><td>40.0</td><td>42.0</td><td>-62.0</td><td>-61.0</td><td>-59.0</td><td>3.1</td><td>5.4</td><td>9.0</td><td>51.0</td><td>57.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-3.3999999999999997e-31</td><td>0.0</td><td>3.1999999999999997e-31</td><td>-0.079</td><td>-0.047</td><td>-0.026</td><td>-0.41</td><td>-0.4</td><td>-0.39</td><td>100.0</td><td>120.0</td><td>130.0</td></tr><tr><td>42.0</td><td>45.0</td><td>51.0</td><td>39.0</td><td>40.0</td><td>42.0</td><td>-62.0</td><td>-61.0</td><td>-59.0</td><td>3.1</td><td>5.0</td><td>9.5</td><td>51.0</td><td>57.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-3.0e-33</td><td>0.0</td><td>3.7e-32</td><td>-0.082</td><td>-0.043</td><td>-0.026</td><td>-0.41</td><td>-0.4</td><td>-0.39</td><td>93.0</td><td>110.0</td><td>120.0</td></tr><tr><td>42.0</td><td>47.0</td><td>53.0</td><td>39.0</td><td>40.0</td><td>42.0</td><td>-62.0</td><td>-61.0</td><td>-59.0</td><td>3.1</td><td>6.2</td><td>11.0</td><td>49.0</td><td>56.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-1.8e-32</td><td>0.0</td><td>1.6999999999999999e-35</td><td>-0.094</td><td>-0.055</td><td>-0.026</td><td>-0.41</td><td>-0.39</td><td>-0.39</td><td>76.0</td><td>89.0</td><td>95.0</td></tr><tr><td>42.0</td><td>47.0</td><td>53.0</td><td>39.0</td><td>40.0</td><td>42.0</td><td>-62.0</td><td>-61.0</td><td>-59.0</td><td>3.1</td><td>6.2</td><td>10.0</td><td>49.0</td><td>56.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-2.6000000000000003e-32</td><td>0.0</td><td>5.5e-34</td><td>-0.089</td><td>-0.054</td><td>-0.026</td><td>-0.41</td><td>-0.4</td><td>-0.39</td><td>53.0</td><td>61.0</td><td>67.0</td></tr><tr><td>42.0</td><td>50.0</td><td>58.0</td><td>39.0</td><td>41.0</td><td>44.0</td><td>-62.0</td><td>-60.0</td><td>-57.0</td><td>3.1</td><td>8.7</td><td>14.0</td><td>44.0</td><td>52.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-4.7e-36</td><td>0.0</td><td>2.8e-36</td><td>-0.12</td><td>-0.076</td><td>-0.026</td><td>-0.41</td><td>-0.4</td><td>-0.39</td><td>33.0</td><td>40.0</td><td>40.0</td></tr><tr><td>42.0</td><td>59.0</td><td>68.0</td><td>39.0</td><td>44.0</td><td>48.0</td><td>-62.0</td><td>-57.0</td><td>-54.0</td><td>3.1</td><td>15.0</td><td>21.0</td><td>34.0</td><td>43.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-1.2e-36</td><td>0.0</td><td>7.100000000000001e-36</td><td>-0.19</td><td>-0.13</td><td>-0.026</td><td>-0.45</td><td>-0.41</td><td>-0.39</td><td>17.0</td><td>20.0</td><td>29.0</td></tr><tr><td>42.0</td><td>58.0</td><td>71.0</td><td>39.0</td><td>44.0</td><td>49.0</td><td>-62.0</td><td>-57.0</td><td>-53.0</td><td>3.1</td><td>14.0</td><td>22.0</td><td>31.0</td><td>44.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-3.3e-39</td><td>0.0</td><td>3.9e-35</td><td>-0.23</td><td>-0.12</td><td>-0.026</td><td>-0.51</td><td>-0.41</td><td>-0.39</td><td>12.0</td><td>12.0</td><td>12.0</td></tr><tr><td>56.0</td><td>68.0</td><td>74.0</td><td>43.0</td><td>48.0</td><td>51.0</td><td>-58.0</td><td>-54.0</td><td>-51.0</td><td>13.0</td><td>21.0</td><td>23.0</td><td>29.0</td><td>34.0</td><td>46.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-3.7000000000000003e-34</td><td>0.0</td><td>1.9e-33</td><td>-0.29</td><td>-0.19</td><td>-0.11</td><td>-0.59</td><td>-0.45</td><td>-0.41</td><td>4.0</td><td>4.0</td><td>28.0</td></tr><tr><td>63.0</td><td>74.0</td><td>74.0</td><td>46.0</td><td>51.0</td><td>51.0</td><td>-56.0</td><td>-51.0</td><td>-51.0</td><td>18.0</td><td>23.0</td><td>23.0</td><td>29.0</td><td>29.0</td><td>39.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-5.7e-33</td><td>0.0</td><td>1.5e-33</td><td>-0.29</td><td>-0.29</td><td>-0.15</td><td>-0.59</td><td>-0.59</td><td>-0.4</td><td>4.5e-7</td><td>3.3e-5</td><td>16.0</td></tr></table>\n \n","category":"page"},{"location":"examples/case3_cmp_formulations/#Table-DC","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Table DC","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"\n<table><tr><th>hpg_1_25.0&#37;</th><th>hpg_1_50.0&#37;</th><th>hpg_1_75.0&#37;</th><th>pf_1_25.0&#37;</th><th>pf_1_50.0&#37;</th><th>pf_1_75.0&#37;</th><th>pf_2_25.0&#37;</th><th>pf_2_50.0&#37;</th><th>pf_2_75.0&#37;</th><th>pf_3_25.0&#37;</th><th>pf_3_50.0&#37;</th><th>pf_3_75.0&#37;</th><th>pg_1_25.0&#37;</th><th>pg_1_50.0&#37;</th><th>pg_1_75.0&#37;</th><th>pg_2_25.0&#37;</th><th>pg_2_50.0&#37;</th><th>pg_2_75.0&#37;</th><th>va_1_25.0&#37;</th><th>va_1_50.0&#37;</th><th>va_1_75.0&#37;</th><th>va_2_25.0&#37;</th><th>va_2_50.0&#37;</th><th>va_2_75.0&#37;</th><th>va_3_25.0&#37;</th><th>va_3_50.0&#37;</th><th>va_3_75.0&#37;</th><th>volume_1_25.0&#37;</th><th>volume_1_50.0&#37;</th><th>volume_1_75.0&#37;</th></tr><tr><td>38.0</td><td>38.0</td><td>65.0</td><td>35.0</td><td>35.0</td><td>46.0</td><td>-65.0</td><td>-65.0</td><td>-54.0</td><td>2.6</td><td>2.6</td><td>19.0</td><td>35.0</td><td>62.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.19</td><td>-0.026</td><td>-0.026</td><td>-0.46</td><td>-0.35</td><td>-0.35</td><td>92.0</td><td>92.0</td><td>100.0</td></tr><tr><td>38.0</td><td>38.0</td><td>40.0</td><td>35.0</td><td>35.0</td><td>36.0</td><td>-65.0</td><td>-65.0</td><td>-64.0</td><td>2.6</td><td>2.6</td><td>4.0</td><td>60.0</td><td>62.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.04</td><td>-0.026</td><td>-0.026</td><td>-0.36</td><td>-0.35</td><td>-0.35</td><td>90.0</td><td>120.0</td><td>130.0</td></tr><tr><td>38.0</td><td>38.0</td><td>45.0</td><td>35.0</td><td>35.0</td><td>38.0</td><td>-65.0</td><td>-65.0</td><td>-62.0</td><td>2.6</td><td>2.6</td><td>7.0</td><td>55.0</td><td>62.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.07</td><td>-0.026</td><td>-0.026</td><td>-0.38</td><td>-0.35</td><td>-0.35</td><td>110.0</td><td>130.0</td><td>150.0</td></tr><tr><td>38.0</td><td>38.0</td><td>52.0</td><td>35.0</td><td>35.0</td><td>41.0</td><td>-65.0</td><td>-65.0</td><td>-59.0</td><td>2.6</td><td>2.6</td><td>11.0</td><td>48.0</td><td>62.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.11</td><td>-0.026</td><td>-0.026</td><td>-0.41</td><td>-0.35</td><td>-0.35</td><td>120.0</td><td>130.0</td><td>150.0</td></tr><tr><td>38.0</td><td>47.0</td><td>62.0</td><td>35.0</td><td>39.0</td><td>45.0</td><td>-65.0</td><td>-61.0</td><td>-55.0</td><td>2.6</td><td>8.3</td><td>17.0</td><td>38.0</td><td>53.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.17</td><td>-0.083</td><td>-0.026</td><td>-0.45</td><td>-0.39</td><td>-0.35</td><td>110.0</td><td>110.0</td><td>130.0</td></tr><tr><td>41.0</td><td>53.0</td><td>68.0</td><td>36.0</td><td>41.0</td><td>47.0</td><td>-64.0</td><td>-59.0</td><td>-53.0</td><td>4.6</td><td>12.0</td><td>21.0</td><td>32.0</td><td>47.0</td><td>59.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.21</td><td>-0.12</td><td>-0.046</td><td>-0.47</td><td>-0.41</td><td>-0.37</td><td>85.0</td><td>85.0</td><td>85.0</td></tr><tr><td>38.0</td><td>48.0</td><td>58.0</td><td>35.0</td><td>39.0</td><td>43.0</td><td>-65.0</td><td>-61.0</td><td>-57.0</td><td>2.6</td><td>8.6</td><td>15.0</td><td>42.0</td><td>52.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.15</td><td>-0.086</td><td>-0.026</td><td>-0.43</td><td>-0.39</td><td>-0.35</td><td>58.0</td><td>58.0</td><td>58.0</td></tr><tr><td>38.0</td><td>53.0</td><td>68.0</td><td>35.0</td><td>41.0</td><td>47.0</td><td>-65.0</td><td>-59.0</td><td>-53.0</td><td>2.6</td><td>12.0</td><td>21.0</td><td>32.0</td><td>47.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.21</td><td>-0.12</td><td>-0.026</td><td>-0.47</td><td>-0.41</td><td>-0.35</td><td>35.0</td><td>35.0</td><td>35.0</td></tr><tr><td>38.0</td><td>55.0</td><td>75.0</td><td>35.0</td><td>42.0</td><td>50.0</td><td>-65.0</td><td>-58.0</td><td>-50.0</td><td>2.6</td><td>13.0</td><td>25.0</td><td>25.0</td><td>45.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.25</td><td>-0.13</td><td>-0.026</td><td>-0.5</td><td>-0.42</td><td>-0.35</td><td>17.0</td><td>20.0</td><td>20.0</td></tr><tr><td>38.0</td><td>62.0</td><td>75.0</td><td>35.0</td><td>45.0</td><td>50.0</td><td>-65.0</td><td>-55.0</td><td>-50.0</td><td>2.6</td><td>17.0</td><td>25.0</td><td>25.0</td><td>38.0</td><td>62.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.25</td><td>-0.17</td><td>-0.026</td><td>-0.5</td><td>-0.45</td><td>-0.35</td><td>7.5</td><td>7.6</td><td>17.0</td></tr><tr><td>61.0</td><td>65.0</td><td>75.0</td><td>44.0</td><td>46.0</td><td>50.0</td><td>-56.0</td><td>-54.0</td><td>-50.0</td><td>17.0</td><td>19.0</td><td>25.0</td><td>25.0</td><td>35.0</td><td>39.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.25</td><td>-0.19</td><td>-0.17</td><td>-0.5</td><td>-0.46</td><td>-0.45</td><td>2.6</td><td>2.6</td><td>23.0</td></tr><tr><td>58.0</td><td>73.0</td><td>75.0</td><td>43.0</td><td>49.0</td><td>50.0</td><td>-57.0</td><td>-51.0</td><td>-50.0</td><td>15.0</td><td>24.0</td><td>25.0</td><td>25.0</td><td>27.0</td><td>42.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>-0.25</td><td>-0.24</td><td>-0.15</td><td>-0.5</td><td>-0.49</td><td>-0.43</td><td>0.0</td><td>0.0</td><td>30.0</td></tr></table>\n \n","category":"page"},{"location":"examples/case3_cmp_formulations/#Table-SOC","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Table SOC","text":"","category":"section"},{"location":"examples/case3_cmp_formulations/","page":"Example Case 3 Comparing Formulations - Year Planning","title":"Example Case 3 Comparing Formulations - Year Planning","text":"\n<table><tr><th>hpg_1_25.0&#37;</th><th>hpg_1_50.0&#37;</th><th>hpg_1_75.0&#37;</th><th>pf_1_25.0&#37;</th><th>pf_1_50.0&#37;</th><th>pf_1_75.0&#37;</th><th>pf_2_25.0&#37;</th><th>pf_2_50.0&#37;</th><th>pf_2_75.0&#37;</th><th>pf_3_25.0&#37;</th><th>pf_3_50.0&#37;</th><th>pf_3_75.0&#37;</th><th>pg_1_25.0&#37;</th><th>pg_1_50.0&#37;</th><th>pg_1_75.0&#37;</th><th>pg_2_25.0&#37;</th><th>pg_2_50.0&#37;</th><th>pg_2_75.0&#37;</th><th>volume_1_25.0&#37;</th><th>volume_1_50.0&#37;</th><th>volume_1_75.0&#37;</th></tr><tr><td>53.0</td><td>53.0</td><td>65.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>6.3</td><td>6.3</td><td>18.0</td><td>37.0</td><td>49.0</td><td>49.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>77.0</td><td>77.0</td><td>110.0</td></tr><tr><td>47.0</td><td>52.0</td><td>60.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>0.47</td><td>5.3</td><td>13.0</td><td>42.0</td><td>50.0</td><td>54.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>65.0</td><td>95.0</td><td>120.0</td></tr><tr><td>48.0</td><td>52.0</td><td>56.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>0.68</td><td>5.2</td><td>9.5</td><td>45.0</td><td>50.0</td><td>54.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>77.0</td><td>99.0</td><td>120.0</td></tr><tr><td>48.0</td><td>52.0</td><td>56.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>0.82</td><td>5.0</td><td>9.3</td><td>46.0</td><td>50.0</td><td>54.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>79.0</td><td>97.0</td><td>110.0</td></tr><tr><td>47.0</td><td>51.0</td><td>56.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>0.41</td><td>4.2</td><td>8.6</td><td>46.0</td><td>51.0</td><td>54.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>68.0</td><td>81.0</td><td>97.0</td></tr><tr><td>47.0</td><td>50.0</td><td>56.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>0.051</td><td>3.4</td><td>8.9</td><td>46.0</td><td>52.0</td><td>55.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>49.0</td><td>61.0</td><td>74.0</td></tr><tr><td>45.0</td><td>51.0</td><td>55.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>-2.3</td><td>4.2</td><td>7.7</td><td>47.0</td><td>51.0</td><td>57.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>23.0</td><td>32.0</td><td>37.0</td></tr><tr><td>42.0</td><td>51.0</td><td>58.0</td><td>47.0</td><td>47.0</td><td>47.0</td><td>-54.0</td><td>-54.0</td><td>-54.0</td><td>-5.2</td><td>3.6</td><td>11.0</td><td>43.0</td><td>51.0</td><td>60.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>8.9</td><td>9.7</td><td>14.0</td></tr><tr><td>34.0</td><td>50.0</td><td>65.0</td><td>46.0</td><td>47.0</td><td>47.0</td><td>-55.0</td><td>-54.0</td><td>-54.0</td><td>-13.0</td><td>2.7</td><td>18.0</td><td>37.0</td><td>52.0</td><td>68.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>3.4e-5</td><td>0.00021</td><td>4.4</td></tr><tr><td>30.0</td><td>50.0</td><td>75.0</td><td>46.0</td><td>47.0</td><td>56.0</td><td>-55.0</td><td>-54.0</td><td>-46.0</td><td>-16.0</td><td>3.0</td><td>19.0</td><td>27.0</td><td>52.0</td><td>72.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>2.7e-6</td><td>2.8e-6</td><td>4.3e-6</td></tr><tr><td>60.0</td><td>60.0</td><td>80.0</td><td>47.0</td><td>47.0</td><td>61.0</td><td>-54.0</td><td>-54.0</td><td>-41.0</td><td>13.0</td><td>13.0</td><td>19.0</td><td>23.0</td><td>42.0</td><td>42.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>1.5e-6</td><td>1.5e-6</td><td>10.0</td></tr><tr><td>45.0</td><td>70.0</td><td>80.0</td><td>47.0</td><td>51.0</td><td>61.0</td><td>-54.0</td><td>-50.0</td><td>-41.0</td><td>-2.0</td><td>19.0</td><td>19.0</td><td>23.0</td><td>32.0</td><td>57.0</td><td>0.0</td><td>0.0</td><td>0.0</td><td>4.4e-7</td><td>4.6e-7</td><td>12.0</td></tr></table>\n \n","category":"page"},{"location":"inputfiles/#Input-Files","page":"Case data","title":"Input Files","text":"","category":"section"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"HydroPowerModels.jl uses case description files to specify cases. The following subsections intend to give a brief description of those files.","category":"page"},{"location":"inputfiles/#Network-Description:-\"PowerModels.json\"","page":"Case data","title":"Network Description: \"PowerModels.json\"","text":"","category":"section"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"Network description follows the standards of PowerModels.jl, but some extra information is required. Thus, we use a JSON file containing the information required by PowerModels.jl, with the MATPOWER notation, and introduced some keys to add the extra information we required (as the \"cost of deficit\").","category":"page"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"This following is an example of a Network Description file:","category":"page"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"{\n  \"bus\": {\n    \"1\": {\n      \"zone\": 1, # [not] loss zone (positive integer).\n      \"bus_i\": 1, # bus number (positive integer).\n      \"bus_type\": 3, # bus type (1 = PQ, 2 = PV, 3 = ref, 4 = isolated).\n      \"vmax\": 1.1, # maximum voltage magnitude (p.u.).\n      \"area\": 1, # area number (positive integer).\n      \"vmin\": 0.9, # minimum voltage magnitude (p.u.).\n      \"index\": 1, # index\n      \"va\": 0, # voltage angle (degrees)\n      \"vm\": 1, # voltage magnitude (p.u.)\n      \"base_kv\": 0 ## base voltage (kV)\n    }#\n  },\n  \"source_type\": \"matpower\", # source file type which generated this json. (if exists)\n  \"name\": \"case3\", # case name\n  \"dcline\": {}, # [not] DC lines description\n  \"source_version\": { # source file version (if exists)\n    \"major\": 2,\n    \"minor\": 0,\n    \"patch\": 0,\n    \"prerelease\": [],\n    \"build\": []\n  },\n  \"gen\": {\n    \"1\": {\n      \"ncost\": 2, # Number of terms to interpolate in cost funcion.  \n      \"qc1max\": 0, # Maximum reactive power output at PC1 (MVAr).\n      \"pg\": 0, # Active Generation (Not Used by PowerModels,but expected).\n      \"model\": 2, # Cost model, 1 = piecewise linear, 2 = polynomial.\n      \"shutdown\": 0, # Shutdown Cost.\n      \"startup\": 0, # Startup Cost.\n      \"qc2max\": 0, # Maximum reactive power output at PC2 (MVAr).\n      \"ramp_agc\": 0, # [not]\n      \"qg\": 0, # Reactive Generation (Not Used by PowerModels,but expected).\n      \"gen_bus\": 2, # Bus Of Generator\n      \"pmax\": 1, # Maximum Real Power Generation (u.u) (Will be multi by mbase).\n      \"ramp_10\": 0, # [not]\n      \"vg\": 1, # Voltage magnitude setpoint (p.u.).\n      \"mbase\": 100, # (MVA) Total MVA base of machine.\n      \"pc2\": 0, # Upper real power output of PQ capability curve (MW).\n      \"index\": 1, # Index\n      \"cost\": [ # (dol/(MW/MVA)) Cost terms\n        18, # linear factor.\n        0 # intercept.\n      ],\n      \"qmax\": 100, # Maximun Reacitive Power Generation\n      \"gen_status\": 1, # Status Generator (On 1, OFF 0).\n      \"qmin\": -100, # Minimum Reactive Power Generation\n      \"qc1min\": 0, # Minimum reactive power output at PC1 (MVAr).\n      \"qc2min\": 0, # Minimum reactive power output at PC2 (MVAr).\n      \"pc1\": 0, # Lower real power output of PQ capability curve (MW).\n      \"ramp_q\": 0, # [not]\n      \"ramp_30\": 0, # [not]\n      \"pmin\": 0, # Minimum Real Power Generation (u.u) (Will be multi by mbase).\n      \"apf\": 0 # [not] Area participation factor.\n    }\n  },\n  \"branch\": {\n    \"1\": {\n      \"br_r\": 0.065, # Resistance (p.u.).\n      \"rate_a\": 1, #  MVA rating A (long term rating), set to 0 for unlimited.\n      \"shift\": 0, #  Transformer phase shift angle (degrees), positive ⇒ delay.\n      \"br_x\": 1, #  Reactance (p.u.).\n      \"g_to\": 0, # [not]\n      \"g_fr\": 0, # [not]\n      \"b_fr\": 0.225,\n      \"f_bus\": 1, # “from” bus number.\n      \"br_status\": 1, # Initial branch status, 1 = in-service, 0 = out-of-service.\n      \"t_bus\": 3, # “to” bus number.\n      \"b_to\": 0.225,\n      \"index\": 1, # Index.\n      \"angmin\": -1.0472, # minimum angle difference, θf − θt (rad).\n      \"angmax\": 1.0472, # maximum angle difference, θf − θt (rad).\n      \"transformer\": false, # Bool to indicate if it is transformer.\n      \"tap\": 1 #  transformer off nominal turns ratio.\n    }\n  },\n  \"storage\": {}, # [not] storages descriptions\n  \"baseMVA\": 100,\n  \"per_unit\": true,\n  \"shunt\": {}, # [not]\n  \"switch\": {}, # [not]\n  \"cost_deficit\": 1000, # cost of deficit in (dol/MW)\n  \"load\": {\n    \"1\": {\n      \"load_bus\": 3, # load's bus number.\n      \"status\": 1, # Initial load status, 1 = in-service, 0 = out-of-service.\n      \"qd\": 0, # reactive power demand.\n      \"pd\": 1, # (MW) real power demand.\n      \"index\": 1 # index.\n    }\n  }\n}\n","category":"page"},{"location":"inputfiles/#Hydro-Generators-Description:-\"hydro.json\"","page":"Case data","title":"Hydro Generators Description: \"hydro.json\"","text":"","category":"section"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"This is an example of a Hydro Description file:","category":"page"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"{\n    \"Hydrogenerators\":[\n        {   \n            \"index\": 1, # Index of Hydrogenerators.\n            \"index_grid\": 3, # Index of generator in network.\n            \"name\": \"\", # Name.\n            \"max_volume\":10, # (Hm3) Maximun Volume of Reservoir.\n            \"min_volume\":0, # (Hm3) Minimun Volume of Reservoir.\n            \"max_turn\": 100 # (m3/s) Maximun Outflow of Reservoir.\n            \"min_turn\": 0 # (m3/s) Minimun Outflow of Reservoir.\n            \"initial_volume\":0, # (Hm3) Initial Volume of Reservoir.\n            \"production_factor\":1, # (MW/ (m3/s)) Production Factor.\n            \"spill_cost\":0, # (dol/Hm3) Cost of Spillage.\n            \"minimal_outflow_violation_cost\":0, # (dol/(m3/s)) Cost of minimal outflow violation.\n            \"minimal_volume_violation_cost\":0, # (dol/(Hm3)) Cost of minimal volume violation.\n            \"downstream_turn\": [], # Hydro Generators downstream of turn.\n            \"downstream_spill\": [] # Hydro Generators downstream of spillage.\n        }\n    ]\n}\n","category":"page"},{"location":"inputfiles/#Inflows:-\"inflows.csv\"","page":"Case data","title":"Inflows: \"inflows.csv\"","text":"","category":"section"},{"location":"inputfiles/","page":"Case data","title":"Case data","text":"Inflows are expected in (m3/s) in a csv file representing a matrix, where rows are the stages and columns are the scenarious.","category":"page"},{"location":"getstarted/#Getting-started","page":"Manual","title":"Getting started","text":"","category":"section"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Once PowerModels, SDDP and a solver (like GLPK or Ipopt) are installed, and a case data folder (e.g. \"case3\") has been acquired, an Hydrothermal Multistage Steady-State Power Network Optimization can be executed.","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"First import the necessary packages:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"using HydroPowerModels\nusing Ipopt, GLPK","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Load Case by passing the respective folder:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"data = HydroPowerModels.parse_folder(\"case3_folderpath\")","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Set Parameters to run, for example, an DC Economic Hydrothermal Dispatch:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"params = create_param( stages = 12, \n                    model_constructor_grid  = DCPPowerModel,\n                    post_method             = PowerModels.build_opf,\n                    optimizer               = GLPK.Optimizer\n);","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Build the Model and execute the SDDP method:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"m = hydrothermaloperation(data, params)\n\nHydroPowerModels.train(m;iteration_limit = 60);","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Simulate 100 Instances of the problem:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"results = HydroPowerModels.simulate(m, 100);","category":"page"},{"location":"getstarted/#Getting-Results","page":"Manual","title":"Getting Results","text":"","category":"section"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"The simulate command in HydroPowerModels returns a detailed execution data in the form of a dictionary.","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"For example, the algorithm's runtime and original case data can be accessed with:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"results[:solve_time]\nresults[:data]","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Simulation results are found in the simulations array inside the dictionary, which every element is an array containing information of all stages. For example, information about the 10th simulation, as objective value and sampled noise of the first stage, may be accessed with:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"results[:simulations][10][1][:objective]\nresults[:simulations][10][1][:noise_term]","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"The :powersystem field contains detailed information about the grid solution returned by the PowerModels package, like generation and bus informations (inside the subitem \"solution\") and status (\"OPTIMAL\", \"INFEASIBLE\",...) of the solution execution. For example, the status of the solution execution and the active generation of the 2th generator on the jth stage and ith simulation can be inspect by:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"results[:simulations][1][2][:powersystem][\"termination_status\"]\n\nresults[:simulations][i][j][:powersystem][\"solution\"][\"gen\"][\"2\"][\"pg\"]","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Reservoirs menagement information, like outflow and spillage, are found inside the :reservoirs field:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"results[:simulations][i][j][:reservoirs][:outflow]\n\nresults[:simulations][i][j][:reservoirs][:spill]","category":"page"},{"location":"getstarted/#Plotting-Results","page":"Manual","title":"Plotting Results","text":"","category":"section"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"In order to plot the results returned by the simulate function, you may choose from a variety of methods.","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"The function ’plotresults()’ receives a results dictionary and generates the most common plots for a hydrothermal dispatch: ","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"HydroPowerModels.plotresults(results)","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"Otherwise, it helps to organize values of a variable for all simulations and stages into a matrix and then plot using the  'plotscenarios'. The 'plotscenarios' function indicates the median and the following quantiles: [5%, 15%, 25%, 75%, 85%, 95%]. For example, to plot the values of the active generation of the 1st generator:","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"baseMVA =  [results[:simulations][i][j][:powersystem][\"solution\"][\"baseMVA\"] for i=1:100, j=1:12]'\n\nscen_gen = [results[:simulations][i][j][:powersystem][\"solution\"][\"gen\"][\"$gen\"][\"pg\"] for i=1:100, j=1:12]'.*baseMVA\n\nHydroPowerModels.plotscenarios(scen_gen, title  = \"Thermal Generation 1\",\n                ylabel = \"MW\",\n                xlabel = \"Stages\",\n                bottom_margin = 10mm,\n                right_margin = 10mm,\n                left_margin = 10mm                \n                )","category":"page"},{"location":"getstarted/","page":"Manual","title":"Manual","text":"For those familiar with other plot functions may use them with no big dificulty.","category":"page"},{"location":"apireference/#API-Reference","page":"Reference","title":"API Reference","text":"","category":"section"},{"location":"apireference/#Hydro-power-model","page":"Reference","title":"Hydro power model","text":"","category":"section"},{"location":"apireference/","page":"Reference","title":"Reference","text":"HydroPowerModels.hydrothermaloperation","category":"page"},{"location":"apireference/#HydroPowerModels.hydrothermaloperation","page":"Reference","title":"HydroPowerModels.hydrothermaloperation","text":"hydrothermaloperation(alldata::Array{Dict{Any,Any}}, params::Dict)\n\nCreate a hydrothermal power operation model containing the policygraph the system data and the planning parameters.\n\nRequired parameters are:\n\nalldata is a vector of dicts with information of the problem's stages. \nparam is a dict containing solution parameters.\n\n\n\n\n\n","category":"function"},{"location":"apireference/#System-data-and-parameters","page":"Reference","title":"System data and parameters","text":"","category":"section"},{"location":"apireference/","page":"Reference","title":"Reference","text":"HydroPowerModels.parse_file_json\nHydroPowerModels.create_param","category":"page"},{"location":"apireference/#HydroPowerModels.parse_file_json","page":"Reference","title":"HydroPowerModels.parse_file_json","text":"Read hydro description json file.\n\n\n\n\n\n","category":"function"},{"location":"apireference/#HydroPowerModels.create_param","page":"Reference","title":"HydroPowerModels.create_param","text":"create_param(;stages::Int = 1,\n    model_constructor_grid = DCPPowerModel,\n    model_constructor_grid_backward = model_constructor_grid,\n    model_constructor_grid_forward = model_constructor_grid_backward,\n    post_method = PowerModels.build_opf,\n    optimizer = GLPK.Optimizer,\n    optimizer_backward = optimizer,\n    optimizer_forward = optimizer_backward,\n    setting = Dict(\"output\" => Dict(\"branch_flows\" => true,\"duals\" => true)),\n    verbose = false,\n    stage_hours = 1)\n\nCreate Parameters Dictionary.\n\nKeywords are:\n\nstages::Int             : Number of stages.\nmodelconstructorgrid  : Network formulation (Types from https://github.com/lanl-ansi/PowerModels.jl).\noptimizer               : Optimizer factory (http://www.juliaopt.org/JuMP.jl/v0.19.0/solvers/).\nsetting                 : PowerModels settings (https://github.com/lanl-ansi/PowerModels.jl/blob/e28644bf85232a5322adeeb847c0d18b7ff4f235/src/core/base.jl#L6-L34)) .\nverbose                 : Boolean to indicate information prints.\nstage_hours             : Number of hours in each stage.\n\n\n\n\n\n","category":"function"},{"location":"apireference/#Training-the-policy","page":"Reference","title":"Training the policy","text":"","category":"section"},{"location":"apireference/","page":"Reference","title":"Reference","text":"HydroPowerModels.train","category":"page"},{"location":"apireference/#HydroPowerModels.train","page":"Reference","title":"HydroPowerModels.train","text":"train(hydromodel::HydroPowerModel;kwargs...)\n\nTrain future cost function using SDDP.\n\nKeyword arguments (same as SDDP.train): https://github.com/odow/SDDP.jl/blob/0490bea2c46787e1d4d63a5491ea0106c7fe70cf/src/algorithm.jl#L780-L827\n\n\n\n\n\n","category":"function"},{"location":"apireference/#Visualize-data-and-results","page":"Reference","title":"Visualize data and results","text":"","category":"section"},{"location":"apireference/","page":"Reference","title":"Reference","text":"HydroPowerModels.plotscenarios\nHydroPowerModels.plot_grid\nHydroPowerModels.plot_aggregated_results\nHydroPowerModels.plotresults\nHydroPowerModels.plot_bound","category":"page"},{"location":"examples/cases/","page":"Examples","title":"Examples","text":"Case reports are generated during the package building to test package functionalities and provide examples:","category":"page"},{"location":"examples/cases/","page":"Examples","title":"Examples","text":"https://andrewrosemberg.github.io/HydroPowerModels.jl/latest/examples/case3","category":"page"},{"location":"examples/cases/","page":"Examples","title":"Examples","text":"https://andrewrosemberg.github.io/HydroPowerModels.jl/latest/examples/case3_5years","category":"page"},{"location":"examples/cases/","page":"Examples","title":"Examples","text":"https://andrewrosemberg.github.io/HydroPowerModels.jl/latest/examples/case3_ac","category":"page"},{"location":"examples/cases/","page":"Examples","title":"Examples","text":"https://andrewrosemberg.github.io/HydroPowerModels.jl/latest/examples/case3_soc","category":"page"},{"location":"#HydroPowerModels.jl-Documentation","page":"Home","title":"HydroPowerModels.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = HydroPowerModels","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"HydroPowerModels.jl is a Julia/JuMP package for Hydrothermal Multistage Steady-State Power Network Optimization solved by Stochastic Dual Dynamic Programming (SDDP). ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Problem Specifications and Network Formulations are handled by PowerModels.jl. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Solution method is handled by SDDP.jl.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The current package is unregistered so you will need to add it as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ] add https://github.com/andrewrosemberg/HydroPowerModels.jl.git ","category":"page"}]
}
