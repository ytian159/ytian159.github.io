---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I use seismology to study the earth, planets, and their moons. 
I'm currently studying the amplitude amplification and waveform inversion of Alaska basins.
I write my own seismic wavefield modeling code "AstroSeis" and also use other forward modeling codes to simulate wave propagation in solid planets and small bodies. These modeling work need lots of computation, so my work could involve a lot of use of supercomputer and GPU to accelerate my work. I also participate in the design of the Venus Seismometer, so my work involves designing triggering algorithms and machine-learning-based events detection algorithms for seismometers in high temperature and pressure. Here are some projects I'm involved in.


**SCOPED Nenana basin seismic wavefield modeling and seismic wave amplification**
------
<img src="images/wavefield_propagation_nenana_CMTSOLUTION_20181003032937544_short.gif" alt="description of the gif">

Seismic wave propagation in Nenana basin region using SpecFEM3D Cartesian

<img width="602" alt="image" src="https://user-images.githubusercontent.com/53156528/236111248-efe92c34-b409-42b9-a920-fb0619480407.png">

Basin amplification map of Nenana basin at 0.2Hz 

**3-D seismic wavefield modeling for irregular bodies**
------
I developed a 3D elastic boundary element method computer code, called AstroSeis, to model seismic wavefields in a body with an arbitrary shape, such as an asteroid. Besides the AstroSeis can handle arbitrary surface topography, it can deal with a liquid core in an asteroid model. Both the solid and liquid domains are homogenous in our current code. For seismic sources, we can use single forces or moment tensors. The AstroSeis is implemented in the frequency domain, and the frequency-dependent Q can be readily incorporated. The code is in MATLAB, and it is straightforward to set up the model to run the code. The frequency-domain calculation is advantageous to study the long-term elastic response of a celestial body due to a cyclic force, such as the tidal force, with no numerical dispersion issue suffered by many other methods requiring volume meshing. AstroSeis has been benchmarked with other methods such as normal-mode summation and the direct solution method. This open-source AstroSeis will be a useful tool to study the interior and surface processes of asteroids.
<img width="600" alt="image" src="https://user-images.githubusercontent.com/53156528/134985232-84f1a036-098a-4596-8ee1-6a0cb36ca81c.png">

Topography’s effect on seismic wavefield at different frequency

**Tidal-seismic resonance between planets and their moons**
------
Tidal forces play an important role in the evolution of the planet-moon systems. The tidal force of a moon can excite seismic waves in the planet it is orbiting. A tidal-seismic resonance is expected when a tidal force frequency matches a free-oscillation frequency of the planet. Here we show that when the moon is close to the planet, the tidal-seismic resonance can cause large-amplitude seismic waves, which can change the shape of the planet and in turn, exert a negative torque on the moon causing it to fall rapidly toward the planet. We postulate that the tidalseismic resonance may be an important mechanism, which can accelerate the planet accretion process. On the other hand, the tidal-seismic resonance effect can also be used to interrogate the planet’s interior by long term tracking of the orbital change of the moon.

![falling2](https://user-images.githubusercontent.com/53156528/134987655-945ad992-b0a7-429e-aea7-afef7eef28ab.gif)

Resonance between seismic wavefield and tidal force.
It can change the falling trajectory of a moon to the planet.



**Events catalog building and triggering algorithm for Venus seismometer**
------
The nearest-term pathway to deployment of a seismometer on Venus is an instrument that can operate under ambient surface conditions on battery power.  We conduct a series of studies on combined hardware and software approaches to maximize the quality of data returned under the likely restrictions of no lander data storage and only being able to transmit in real time a small fraction of a multi-month data record.  We assess likely Venus seismicity by examining different terrestrial analog settings; we find that likely Venus analog settings all fall within about an order of magnitude of mean Earth in terms of seismicity level. We developed a low-memory method that mimics the common terrestrial long-term-average/short-term-average trigger in success at triggering on earthquakes and not noise.  

<img width="400" alt="image" src="https://user-images.githubusercontent.com/53156528/134985544-ebf8deed-ca52-4887-8299-36b27d21d70c.png">

SAEVe concept and instrument locations



<img width="600" alt="image" src="https://user-images.githubusercontent.com/53156528/228992819-ce4df045-68c9-473b-89f1-86d9d4d1e8fe.png">

Illustration of the “segmented window” method. Inspired by STA/LTA method, but it needs store three parameters on the lander. (Tian et al., 2022)




<!--- **Aerial hyperspectral image processing**
======
<img width="600" alt="image" src="https://user-images.githubusercontent.com/53156528/134985924-5baa2c26-6793-4f77-a0ff-6d9478bfc1c5.png">
--->
------
