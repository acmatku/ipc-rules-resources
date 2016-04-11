# ipc-rules-resources

In this repo we keep a PDF handbook for the ACM@KU Intramural Programming Competition. This PDF has the rules for the competition, as well as examples of programs properly written to be judged by the DOMJudge automated judging system. 

Full descriptions of the two short sample problems are provided in the handbook PDF and in problem PDFs residing in the ``examples`` folder.

# Maintaining

Competition administrators should maintain this repo on a yearly basis. The ``main.text`` file contains the source code for the handbook PDF. A header of comments near the top of the document contain global variables that are yearly-dependent, such as the current competition chairperson and their contact information, as well as the public URL to the DOMJudge web-portal.

# Compiling

To compile the PDF from the LaTex source, you may either use a terminal based LaTex compiler to compile the ``main.tex`` to a PDF, or you may zip this whole directory (excluding the ``.git`` folder), and upload the zip to an online LaTex editor, like [Overleaf](https://www.overleaf.com/), or [ShareLaTex](https://www.sharelatex.com/), which have compilers built into them. 
