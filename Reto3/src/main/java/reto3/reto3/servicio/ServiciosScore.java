/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reto3.reto3.modelo.Score;
import reto3.reto3.repositorio.RepositorioScore;

@Service
public class ServiciosScore {

    @Autowired
    private RepositorioScore metodosCrud;

    public List<Score> getAll() {
        return metodosCrud.getAll();

    }

    public Optional<Score> getScore(int idScore) {
        return metodosCrud.getScore(idScore);
    }

    public Score save(Score score) {
        if (score.getIdScore() == null) {
            return metodosCrud.save(score);
        } else {
            Optional<Score> evt = metodosCrud.getScore(score.getIdScore());
            if (evt.get() != null) {
                return metodosCrud.save(score);
            } else {
                return score;
            }
        }
    }

    public Score update(Score score){
        if(score.getIdScore()!=null){
            Optional<Score>g=metodosCrud.getScore(score.getIdScore());
            if(!g.isEmpty()){
                if(score.getScore()!=null){
                    g.get().setScore(score.getScore());
                }
                if(score.getMessage()!=null){
                    g.get().setMessage(score.getMessage());
                }
                return metodosCrud.save(g.get());
            }
        }
        return score;
    }
    public boolean deletescore(int idScore){
        Boolean d=getScore(idScore).map(score -> {
            metodosCrud.delete(score);
            return true;
        }).orElse(false);
        return d;
    }
}
