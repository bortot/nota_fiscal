package br.abel.notafiscal.resource;

import br.abel.notafiscal.entity.Fornecedor;
import br.abel.notafiscal.repository.FornecedorRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/fornecedor")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ApplicationScoped
public class FornecedorResource {

    @Inject FornecedorRepository fornecedorRepository;

    @GET
    public List<Fornecedor> findAll() {
        return Fornecedor.listAll();
    }

    @POST
    @Transactional
    public Fornecedor create(Fornecedor entity) {
        fornecedorRepository.persist(entity);
        return entity;
    }
}
