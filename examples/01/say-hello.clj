(defn main []
  (read-line)
  (doseq [line (line-seq (java.io.BufferedReader. *in*))]
    (println (str "Hello " line "!"))))

(main)
