(defn main []
  (doseq [line (line-seq (java.io.BufferedReader. *in*))]
    (when (not= line "0")
      (let [[numer denom] (map #(Integer/parseInt %) (clojure.string/split line #" "))]
        (println (/ numer denom))))))

(main)
