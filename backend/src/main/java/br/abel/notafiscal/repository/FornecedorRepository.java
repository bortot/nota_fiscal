package br.abel.notafiscal.repository;

import br.abel.notafiscal.entity.Fornecedor;
import br.abel.notafiscal.entity.Produto;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class FornecedorRepository implements PanacheRepository<Fornecedor> {

}
