# helium
open source and plush electric filter gui design tool

## system design

### design inputs

1. domain

	- digital
	- analogue

2. filter specifications

	- ripple (passband, stopband) [dB]
	- attenuation (passband, stopband) [dB]
	- cutoff frequencies (pass, stop) [hz]
	- edge frequencies (upper passband, lower passband, upper stopband, lower stopband) [hz]
	- bandwidth [hz]
	- center frequency [hz]
	- transition width [hz]
	- sampling frequency [hz]
	- *order

3. response

	- lpf
	- hpf
	- bpf
	- bsf

4. approximation

	- butterworth
	- chebychev
	- inverse chebychev
	- elliptic
	- bessel

5. configuration

	- digital

		- iir
		- fir

	- analogue

		- active
		- passive

6. structure

	- direct form i synthesis
	- direct form ii synthesis
	- cascade

### program outputs

1. design summary

2. design implementation measurements

3. frequency domain transfer function

4. time domain impulse response function

5. frequency response plot

6. phase response plot

7. circuit diagram

8. topology block diagram

9. response optimization

10. evaluate filter performance on test signals

11. practical component selection

12. universal circuit diagram export (netlist)

### useful applications

1. analogue -> passive + active

	- rf
	- emi
	- power supplies
	- power electronics
	- buck/boost converters

2. digital -> iir + fir

	- ecg/eeg
	- bci
	- communication systems
	- audio processing
